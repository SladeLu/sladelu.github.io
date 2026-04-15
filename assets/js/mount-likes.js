---
layout: null
---

(function () {
  const buttons = Array.from(document.querySelectorAll("[data-like-id]"));
  if (!buttons.length) return;

  const settings = {
    enabled: {{ site.data.firebase.mount_likes.enabled | default: false | jsonify }},
    collection: {{ site.data.firebase.mount_likes.collection | default: "mount_likes" | jsonify }},
    firebaseConfig: {
      apiKey: {{ site.data.firebase.mount_likes.api_key | jsonify }},
      authDomain: {{ site.data.firebase.mount_likes.auth_domain | jsonify }},
      projectId: {{ site.data.firebase.mount_likes.project_id | jsonify }},
      storageBucket: {{ site.data.firebase.mount_likes.storage_bucket | jsonify }},
      messagingSenderId: {{ site.data.firebase.mount_likes.messaging_sender_id | jsonify }},
      appId: {{ site.data.firebase.mount_likes.app_id | jsonify }}
    }
  };

  const storagePrefix = "mount-like:";
  const requiredConfig = ["apiKey", "authDomain", "projectId", "appId"];

  function countEl(button) {
    return button.querySelector("[data-like-count]");
  }

  function setCount(button, count) {
    const el = countEl(button);
    if (el) el.textContent = String(Math.max(0, Number(count) || 0));
  }

  function setLiked(button) {
    button.classList.add("is-liked");
    button.setAttribute("aria-pressed", "true");
  }

  function hasCompleteConfig() {
    return requiredConfig.every((key) => {
      const value = settings.firebaseConfig[key];
      return typeof value === "string" && value.trim() !== "";
    });
  }

  function markUnavailable(message) {
    buttons.forEach((button) => {
      button.classList.add("is-unavailable");
      button.title = message;
    });
  }

  buttons.forEach((button) => {
    const id = button.dataset.likeId;
    if (id && localStorage.getItem(storagePrefix + id) === "1") {
      setLiked(button);
    }
  });

  if (!settings.enabled || !hasCompleteConfig()) {
    markUnavailable("Like storage is not configured yet.");
    return;
  }

  import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")
    .then(({ initializeApp }) => {
      return Promise.all([
        Promise.resolve(initializeApp(settings.firebaseConfig)),
        import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
      ]);
    })
    .then(([app, firestore]) => {
      const {
        getFirestore,
        doc,
        getDoc,
        runTransaction,
        serverTimestamp
      } = firestore;
      const db = getFirestore(app);

      buttons.forEach((button) => {
        const id = button.dataset.likeId;
        if (!id) return;

        const ref = doc(db, settings.collection, id);

        getDoc(ref)
          .then((snap) => {
            setCount(button, snap.exists() ? snap.data().count : 0);
          })
          .catch(() => {
            button.title = "Unable to load likes right now.";
          });

        button.addEventListener("click", () => {
          if (button.classList.contains("is-loading")) return;
          if (localStorage.getItem(storagePrefix + id) === "1") {
            setLiked(button);
            return;
          }

          button.classList.add("is-loading");
          button.disabled = true;

          runTransaction(db, async (transaction) => {
            const snap = await transaction.get(ref);
            if (!snap.exists()) {
              transaction.set(ref, {
                count: 1,
                updatedAt: serverTimestamp()
              });
              return 1;
            }

            const current = Number(snap.data().count) || 0;
            const next = current + 1;
            transaction.update(ref, {
              count: next,
              updatedAt: serverTimestamp()
            });
            return next;
          })
            .then((next) => {
              localStorage.setItem(storagePrefix + id, "1");
              setCount(button, next);
              setLiked(button);
            })
            .catch((error) => {
              console.warn("Unable to save mount like.", error);
              button.title = "Unable to save like right now.";
            })
            .finally(() => {
              button.classList.remove("is-loading");
              button.disabled = false;
            });
        });
      });
    })
    .catch(() => {
      markUnavailable("Like storage could not be loaded.");
    });
})();
