---
layout: null
---

(function () {
  const listEl = document.getElementById("pub-list");
  if (!listEl) return;

  const publications = [
    {% for paper in site.data.pubs.publications %}
    {% unless paper.hide_from_site %}
    {
      type: {{ paper.type | jsonify }},
      abbrv: {{ paper.abbrv | jsonify }},
      title: {{ paper.title | jsonify }},
      author: {{ paper.author | jsonify }},
      venue: {{ paper.venue | jsonify }},
      status: {{ paper.status | jsonify }},
      address: {{ paper.address | jsonify }},
      page: {{ paper.page | jsonify }},
      date: {{ paper.date | jsonify }},
      ccf: {{ paper.ccf | default: "CCF-0" | jsonify }},
      isNew: {{ paper.new | default: false | jsonify }},
      topics: {{ paper.topics | jsonify }},
      tags: {{ paper.tags | jsonify }},
      hidden: {{ paper.hidden | default: false | jsonify }},
      hideFromSite: {{ paper.hide_from_site | default: false | jsonify }},
      links: {{ paper.links | jsonify }}
    },
    {% endunless %}
    {% endfor %}
  ];

  const monthMap = {
    jan: 1, january: 1,
    feb: 2, february: 2,
    mar: 3, march: 3,
    apr: 4, april: 4,
    may: 5,
    jun: 6, june: 6,
    jul: 7, july: 7,
    aug: 8, august: 8,
    sep: 9, sept: 9, september: 9,
    oct: 10, october: 10,
    nov: 11, november: 11,
    dec: 12, december: 12
  };

  function hasValue(v) {
    return !!v && String(v).trim() !== "" && String(v).trim() !== " ";
  }

  function parseDateValue(dateText) {
    if (!dateText) return 0;
    const text = String(dateText).toLowerCase();
    const years = text.match(/(19|20)\d{2}/g);
    const year = years ? parseInt(years[years.length - 1], 10) : 0;

    let month = 1;
    const tokens = text.replace(/\./g, "").split(/[^a-z]+/).filter(Boolean);
    for (let i = 0; i < tokens.length; i++) {
      if (monthMap[tokens[i]]) {
        month = monthMap[tokens[i]];
        break;
      }
    }

    return year * 100 + month;
  }

  const topicMeta = {
    privacy: { label: "Privacy" },
    sustainability: { label: "Sustainable" },
    performance: { label: "Performance" },
    "edge-ai": { label: "Edge AI" }
  };

  publications.forEach((p) => {
    const tags = Array.isArray(p.tags) ? p.tags : [];
    const normalizedTags = tags.map((t) => String(t).toLowerCase());
    const topics = Array.isArray(p.topics) ? p.topics : [];
    p.normalizedTags = normalizedTags;
    p.normalizedTopics = topics.map((t) => String(t).toLowerCase());
    p.ccf = hasValue(p.ccf) ? String(p.ccf).toUpperCase() : "CCF-0";
    p.isNew = p.isNew === true;
    p.dateValue = parseDateValue(p.date);
    p.isHidden = p.hidden === true;
    p.isWorkshop = normalizedTags.includes("workshop");
    p.hasBestPaperAward = normalizedTags.includes("best paper");
    p.isBestNotePaperCandidate = normalizedTags.includes("best note paper candidate award");
    p.isOral = normalizedTags.includes("oral");
    p.isAward = p.hasBestPaperAward || p.isBestNotePaperCandidate || p.isOral;
  });

  const visiblePublications = publications.filter((p) => !p.hideFromSite);

  const allTick = document.getElementById("pub-filter-all");
  const conferenceTick = document.getElementById("pub-filter-conference");
  const journalTick = document.getElementById("pub-filter-journal");
  const workshopTick = document.getElementById("pub-filter-workshop");
  const awardTick = document.getElementById("pub-filter-award");
  const topicPrivacyTick = document.getElementById("pub-filter-topic-privacy");
  const topicSustainabilityTick = document.getElementById("pub-filter-topic-sustainability");
  const topicPerformanceTick = document.getElementById("pub-filter-topic-performance");
  const topicEdgeAiTick = document.getElementById("pub-filter-topic-edge-ai");
  const ccfATick = document.getElementById("pub-filter-ccf-a");
  const ccfBTick = document.getElementById("pub-filter-ccf-b");
  const ccfCTick = document.getElementById("pub-filter-ccf-c");
  const ccfNoneTick = document.getElementById("pub-filter-ccf-none");
  const sortYearBtn = document.getElementById("pub-sort-year");
  const sortYearIcon = document.getElementById("pub-sort-year-icon");
  const topicTicks = [topicPrivacyTick, topicSustainabilityTick, topicPerformanceTick, topicEdgeAiTick];
  const controls = [allTick, conferenceTick, journalTick, workshopTick, awardTick, topicPrivacyTick, topicSustainabilityTick, topicPerformanceTick, topicEdgeAiTick, ccfATick, ccfBTick, ccfCTick, ccfNoneTick, sortYearBtn, sortYearIcon];
  if (controls.some((el) => !el)) return;

  let sortOrder = "new";

  function setFilterCount(key, count) {
    const el = document.querySelector(`[data-pub-count="${key}"]`);
    if (el) el.textContent = `(${count})`;
  }

  function updateFilterCounts() {
    setFilterCount("all", visiblePublications.length);
    setFilterCount("conference", visiblePublications.filter((p) => p.type === "conference").length);
    setFilterCount("journal", visiblePublications.filter((p) => p.type === "journal").length);
    setFilterCount("workshop", visiblePublications.filter((p) => p.isWorkshop).length);
    setFilterCount("award", visiblePublications.filter((p) => p.isAward).length);
    Object.keys(topicMeta).forEach((topic) => {
      setFilterCount(`topic-${topic}`, visiblePublications.filter((p) => p.normalizedTopics.includes(topic)).length);
    });
    setFilterCount("ccf-a", visiblePublications.filter((p) => p.ccf === "CCF-A").length);
    setFilterCount("ccf-b", visiblePublications.filter((p) => p.ccf === "CCF-B").length);
    setFilterCount("ccf-c", visiblePublications.filter((p) => p.ccf === "CCF-C").length);
    setFilterCount("ccf-none", visiblePublications.filter((p) => p.ccf === "CCF-0").length);
  }

  function getSelectedCCF() {
    const selected = [];
    if (ccfATick.checked) selected.push("CCF-A");
    if (ccfBTick.checked) selected.push("CCF-B");
    if (ccfCTick.checked) selected.push("CCF-C");
    if (ccfNoneTick.checked) selected.push("CCF-0");
    return selected;
  }

  function getSelectedTopics() {
    const selected = [];
    if (topicPrivacyTick.checked) selected.push("privacy");
    if (topicSustainabilityTick.checked) selected.push("sustainability");
    if (topicPerformanceTick.checked) selected.push("performance");
    if (topicEdgeAiTick.checked) selected.push("edge-ai");
    return selected;
  }

  function updateControlLabels() {
    const isOldestFirst = sortOrder === "old";
    sortYearIcon.textContent = "↓";
    sortYearBtn.dataset.order = sortOrder;
    sortYearBtn.setAttribute(
      "aria-label",
      isOldestFirst ? "Sort by year, oldest first. Click to show newest first." : "Sort by year, newest first. Click to show oldest first."
    );
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getCitationId(p, index) {
    const seed = `${p.abbrv || "pub"}-${p.title || index}`;
    return seed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function formatVenueName(venue) {
    return String(venue || "")
      .replace(/^the\s+/i, "")
      .replace(/^\d{4}\s+/, "");
  }

  function formatConferenceDetail(detail) {
    return String(detail || "")
      .split(/\s*,\s*/)
      .filter((part) => !/^(vol\.|no\.|article no\.)/i.test(part))
      .join(", ");
  }

  function renderDownloadMenu(links) {
    if (!links.length) return '<div class="pub-right"></div>';

    return `
      <div class="pub-right">
        <details class="pub-download">
          <summary class="pub-download-button" aria-label="Download resources" title="Download resources">
            <span>[Download]</span>
          </summary>
          <div class="pub-download-menu">
            ${links.join("")}
          </div>
        </details>
      </div>
    `;
  }

  function renderItem(p) {
    const index = publications.indexOf(p);
    const citationId = getCitationId(p, index);
    const bibtex = p.links && hasValue(p.links.bibtex) ? String(p.links.bibtex).trim() : "";
    const paperUrl = p.links && p.links.paper ? p.links.paper : "";
    const titleHtml = hasValue(paperUrl)
      ? `<a href="${paperUrl}">${p.title || "Untitled"}</a>`
      : `${p.title || "Untitled"}`;

    const typeBadgeClass = p.type === "conference" ? "badge2 badge2--conference" : "badge2 badge2--journal";
    const kindLabel = p.type === "conference" ? "Conference" : "Journal";

    const links = [];
    function pushDownloadItem(key, label, options = {}) {
      if (!p.links || !(key in p.links)) return;
      if (hasValue(p.links[key])) {
        links.push(`<a href="${p.links[key]}">${label}</a>`);
      } else if (options.showPlaceholder) {
        links.push(`<button type="button" class="pub-download-placeholder" disabled title="To be published">${label}</button>`);
      }
    }
    pushDownloadItem("download", "Paper", { showPlaceholder: true });
    pushDownloadItem("slides", "Slides");
    pushDownloadItem("video", "Video");
    pushDownloadItem("poster", "Poster");

    const citeButton = bibtex
      ? `<button class="pub-cite-toggle" type="button" data-cite-target="${citationId}" aria-label="Show BibTeX citation" aria-expanded="false" aria-controls="${citationId}" title="Show BibTeX citation">
          <span aria-hidden="true">❞</span>
        </button>`
      : "";

    const workshopTag = p.isWorkshop ? `<span class="typemark" data-type="workshop">Workshop</span>` : "";
    const oralTag = p.isOral ? `<span class="typemark" data-type="oral">ORAL</span>` : "";
    const bestPaperTag = p.hasBestPaperAward ? `<span class="bestpaper-award">🏆 Best Paper</span>` : "";
    const bestNotePaperCandidateTag = p.isBestNotePaperCandidate ? `<span class="bestpaper-award">Best Note Paper Candidate Award</span>` : "";
    const ccfBadge = p.ccf === "CCF-0" ? "" : `<span class="ccf-chip" data-ccf="${p.ccf}">${p.ccf}</span>`;
    const proceedingsLabel = `${hasValue(p.status) ? `${p.status} · ` : ""}${formatVenueName(p.venue)}`;
    const conferenceDetails = [formatConferenceDetail(p.page), p.address, p.date].filter(hasValue).join(", ");
    const venueLine = p.type === "conference"
      ? `<u><i>${proceedingsLabel}</i></u>${conferenceDetails ? `, ${conferenceDetails}` : ""}`
      : `<u><i>${p.venue || ""}</i></u>${hasValue(p.page) ? `, ${p.page}` : ""}, ${p.date || ""}`;
    const newPrefix = p.isNew ? `<span class="pub-title-new">✨</span> ` : "";

    return `
      <li class="pub-item">
        <details class="pub-details" ${p.isHidden ? "" : "open"}>
          <summary class="pub-summary">
            <div class="pub-summary-main">
              <div class="pub-head">
                <span class="${typeBadgeClass}">${p.abbrv || kindLabel}</span>
                ${workshopTag}
                ${ccfBadge}
                ${oralTag}
                ${bestPaperTag}
                ${bestNotePaperCandidateTag}
              </div>
              <div class="pub-title">${newPrefix}${titleHtml}${citeButton}</div>
            </div>
            <span class="pub-toggle" aria-hidden="true">▾</span>
          </summary>
          <div class="pub-body">
            <div class="pub-body-row">
              <div class="pub-main">
                <div class="pub-meta">${p.author || ""}</div>
                <div class="pub-meta">${venueLine}</div>
              </div>
              ${renderDownloadMenu(links)}
            </div>
            ${bibtex ? `
              <div class="pub-citation" id="${citationId}" hidden>
                <div class="pub-citation-toolbar">
                  <span>BibTeX</span>
                  <button class="pub-cite-copy" type="button" data-cite-copy="${citationId}">Copy BibTeX</button>
                </div>
                <pre><code>${escapeHtml(bibtex)}</code></pre>
              </div>
            ` : ""}
          </div>
        </details>
      </li>
    `;
  }

  function setUpCitationActions() {
    listEl.querySelectorAll(".pub-cite-toggle").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const citation = document.getElementById(button.dataset.citeTarget);
        if (!citation) return;
        const willShow = citation.hidden;
        const details = button.closest(".pub-details");
        if (willShow && details) details.open = true;
        citation.hidden = !willShow;
        button.setAttribute("aria-expanded", String(willShow));
      });
    });

    listEl.querySelectorAll(".pub-title a").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    listEl.querySelectorAll(".pub-download").forEach((menu) => {
      menu.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    listEl.querySelectorAll(".pub-cite-copy").forEach((button) => {
      button.addEventListener("click", async () => {
        const citation = document.getElementById(button.dataset.citeCopy);
        const code = citation ? citation.querySelector("code") : null;
        if (!code || !navigator.clipboard) return;

        await navigator.clipboard.writeText(code.textContent);
        const originalText = button.textContent;
        button.textContent = "Copied!";
        window.setTimeout(() => {
          button.textContent = originalText;
        }, 1400);
      });
    });
  }

  function applyFiltersAndRender() {
    const showAll = allTick.checked;
    const showConference = conferenceTick.checked;
    const showJournal = journalTick.checked;
    const showWorkshop = workshopTick.checked;
    const showAward = awardTick.checked;
    const selectedCCF = getSelectedCCF();
    const selectedTopics = getSelectedTopics();
    const sortVal = sortOrder;
    updateControlLabels();

    let filtered = visiblePublications.filter((p) => {
      if (!showAll) {
        if (showConference || showJournal) {
          if (p.type === "conference" && !showConference) return false;
          if (p.type === "journal" && !showJournal) return false;
        }

        const tagFilters = [];
        if (showWorkshop) tagFilters.push(p.isWorkshop);
        if (showAward) tagFilters.push(p.isAward);
        if (tagFilters.length > 0 && !tagFilters.some(Boolean)) return false;
      }

      if (!showAll && selectedTopics.length > 0 && !selectedTopics.some((topic) => p.normalizedTopics.includes(topic))) return false;
      if (!showAll && selectedCCF.length > 0 && !selectedCCF.includes(p.ccf)) return false;

      return true;
    });

    filtered.sort((a, b) => {
      const diff = a.dateValue - b.dateValue;
      return sortVal === "old" ? diff : -diff;
    });

    if (!filtered.length) {
      listEl.innerHTML = '<li class="pub-empty">No publications match current filters.</li>';
      return;
    }

    listEl.innerHTML = filtered.map(renderItem).join("");
    setUpCitationActions();
  }

  allTick.addEventListener("change", () => {
    const checked = allTick.checked;
    if (checked) {
      conferenceTick.checked = false;
      journalTick.checked = false;
      workshopTick.checked = false;
      awardTick.checked = false;
      topicTicks.forEach((tick) => {
        tick.checked = false;
      });
      ccfATick.checked = false;
      ccfBTick.checked = false;
      ccfCTick.checked = false;
      ccfNoneTick.checked = false;
    }
    applyFiltersAndRender();
  });

  [conferenceTick, journalTick, workshopTick, awardTick, topicPrivacyTick, topicSustainabilityTick, topicPerformanceTick, topicEdgeAiTick, ccfATick, ccfBTick, ccfCTick, ccfNoneTick].forEach((el) => {
    el.addEventListener("change", () => {
      const anySelected =
        conferenceTick.checked ||
        journalTick.checked ||
        workshopTick.checked ||
        awardTick.checked ||
        topicTicks.some((tick) => tick.checked) ||
        ccfATick.checked ||
        ccfBTick.checked ||
        ccfCTick.checked ||
        ccfNoneTick.checked;
      allTick.checked = !anySelected;
      applyFiltersAndRender();
    });
  });

  sortYearBtn.addEventListener("click", () => {
    sortOrder = sortOrder === "new" ? "old" : "new";
    applyFiltersAndRender();
  });

  updateFilterCounts();
  applyFiltersAndRender();
})();
