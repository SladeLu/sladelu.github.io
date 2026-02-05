# 📝 Publications

<style>
.pub-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0.5rem 0 1rem 0;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
}

.pub-control {
  display: flex;
  flex-direction: column;
  min-width: 140px;
  gap: 0.25rem;
}

.pub-control label {
  font-size: 0.78em;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #334155;
}

.pub-control select {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.35rem 0.45rem;
  background: #fff;
  font-size: 0.95em;
}

.pub-filter-ticks {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.45rem 0.55rem;
  align-items: center;
  min-width: 420px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 2px;
}

.pub-tick {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.35rem;
  padding: 0.22rem 0.56rem;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: #fff;
  color: #334155;
  font-size: 0.86em;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}

.pub-tick input[type="checkbox"] {
  margin: 0;
}

.pub-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.pub-item {
  display: flex;
  gap: 0.85rem;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  background: #fff;
}

.pub-main {
  flex: 1;
  min-width: 0;
}

.pub-right {
  width: 110px;
  min-width: 110px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  white-space: nowrap;
}

.pub-head {
  margin-bottom: 0.3rem;
}

.pub-title {
  font-size: 1.02em;
  font-weight: 700;
}

.pub-meta {
  margin-top: 0.12rem;
}

.pub-links {
  margin-top: 0.25rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

@media (max-width: 760px) {
  .pub-item {
    flex-direction: column;
  }

  .pub-right {
    width: 100%;
    min-width: 0;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
}

.pub-empty {
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 0.9rem;
  color: #64748b;
  background: #f8fafc;
}

.patent-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.patent-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.65rem 0.8rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.patent-code {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border: 1px solid rgba(30, 64, 175, 0.25);
  color: #1e3a8a;
  font-size: 0.8em;
  font-weight: 700;
  white-space: nowrap;
}

.patent-title {
  color: #1f2937;
}
</style>

<div class="pub-controls" id="pub-controls">
  <div class="pub-control pub-filter-ticks">
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-conference" checked>
      Conference
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-journal" checked>
      Journal
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-workshop" checked>
      Workshop
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-ccfa" checked>
      CCF-A
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-bestpaper" checked>
      Best Paper
    </label>
  </div>

  <div class="pub-control">
    <label for="pub-sort-time">Time</label>
    <select id="pub-sort-time">
      <option value="new">New to old</option>
      <option value="old">Old to new</option>
    </select>
  </div>
</div>

<ul id="pub-list" class="pub-list"></ul>

***

## Patents

<ul class="patent-list">
{% for paper in site.data.pubs.patents %}
  <li class="patent-item">
    <span class="patent-code">{{ paper.pid }}</span>
    <span class="patent-title">{{ paper.title }}</span>
  </li>
{% endfor %}
</ul>

***

<script>
(function () {
  const publications = [
    {% for paper in site.data.pubs.conferences %}
    {
      type: "conference",
      abbrv: {{ paper.abbrv | jsonify }},
      title: {{ paper.title | jsonify }},
      author: {{ paper.author | jsonify }},
      venue: {{ paper.conference | jsonify }},
      address: {{ paper.address | jsonify }},
      date: {{ paper.date | jsonify }},
      paperurl: {{ paper.paperurl | jsonify }},
      downloadurl: {{ paper.downloadurl | jsonify }},
      slidesurl: {{ paper.slidesurl | jsonify }},
      videourl: {{ paper.videourl | jsonify }},
      posterurl: {{ paper.posterurl | jsonify }},
      papertype: {{ paper.papertype | jsonify }},
      badgeurl: {{ paper.badgeurl | jsonify }},
      bestpaper: {{ paper.bestpaper | jsonify }}
    },
    {% endfor %}
    {% for paper in site.data.pubs.journals %}
    {
      type: "journal",
      abbrv: {{ paper.abbrv | jsonify }},
      title: {{ paper.title | jsonify }},
      author: {{ paper.author | jsonify }},
      venue: {{ paper.conference | jsonify }},
      page: {{ paper.page | jsonify }},
      date: {{ paper.date | jsonify }},
      paperurl: {{ paper.paperurl | jsonify }},
      downloadurl: {{ paper.downloadurl | jsonify }},
      badgeurl: {{ paper.badgeurl | jsonify }}
    },
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

  publications.forEach((p) => {
    p.dateValue = parseDateValue(p.date);
    p.isCCFA = hasValue(p.badgeurl) && String(p.badgeurl).toUpperCase().includes("CCF-A");
    p.isWorkshop = p.type === "conference" && hasValue(p.papertype) && String(p.papertype).toLowerCase().includes("workshop");
    p.isBestPaper = p.type === "conference" && hasValue(p.bestpaper);
  });

  const conferenceTick = document.getElementById("pub-filter-conference");
  const journalTick = document.getElementById("pub-filter-journal");
  const workshopTick = document.getElementById("pub-filter-workshop");
  const ccfaTick = document.getElementById("pub-filter-ccfa");
  const bestPaperTick = document.getElementById("pub-filter-bestpaper");
  const sortSelect = document.getElementById("pub-sort-time");
  const listEl = document.getElementById("pub-list");

  function renderItem(p) {
    const titleHtml = hasValue(p.paperurl)
      ? `<a href="${p.paperurl}">${p.title || "Untitled"}</a>`
      : `${p.title || "Untitled"}`;

    const typeBadgeClass = p.type === "conference" ? "badge2 badge2--conference" : "badge2 badge2--journal";
    const kindLabel = p.type === "conference" ? "Conference" : "Journal";

    const links = [];
    if (hasValue(p.downloadurl)) links.push(`<a href="${p.downloadurl}">[Paper]</a>`);
    if (hasValue(p.slidesurl)) links.push(`<a href="${p.slidesurl}">[Slides]</a>`);
    if (hasValue(p.videourl)) links.push(`<a href="${p.videourl}">[Video]</a>`);
    if (hasValue(p.posterurl)) links.push(`<a href="${p.posterurl}">[Poster]</a>`);

    const workshopTag = p.isWorkshop ? `<span class="typemark" data-type="workshop">Workshop</span>` : "";
    const bestPaperTag = hasValue(p.bestpaper) ? `<span class="bestpaper-award">${p.bestpaper}</span>` : "";
    const ccfBadge = hasValue(p.badgeurl) ? `<img src="${p.badgeurl}" alt="ranking badge">` : "";

    const venueLine = p.type === "conference"
      ? `<u><i>Proc. of ${p.venue || ""}</i></u>, ${p.address || ""}, ${p.date || ""}`
      : `<u><i>${p.venue || ""}</i></u>${hasValue(p.page) ? `, ${p.page}` : ""}, ${p.date || ""}`;

    return `
      <li class="pub-item">
        <div class="pub-main">
          <div class="pub-head">
            <span class="${typeBadgeClass}">${p.abbrv || kindLabel}</span>
            ${p.type === "conference" && hasValue(p.papertype) && !p.isWorkshop ? `<span class="typemark" data-type="${String(p.papertype).toLowerCase()}">${p.papertype}</span>` : ""}
            ${workshopTag}
            ${ccfBadge}
            ${bestPaperTag}
          </div>
          <div class="pub-title">${titleHtml}</div>
          <div class="pub-meta">${p.author || ""}</div>
          <div class="pub-meta">${venueLine}</div>
        </div>
        ${links.length ? `<div class="pub-right">${links.join(" ")}</div>` : `<div class="pub-right"></div>`}
      </li>
    `;
  }

  function applyFiltersAndRender() {
    const showConference = conferenceTick.checked;
    const showJournal = journalTick.checked;
    const showWorkshop = workshopTick.checked;
    const showCCFA = ccfaTick.checked;
    const showBestPaper = bestPaperTick.checked;
    const sortVal = sortSelect.value;

    let filtered = publications.filter((p) => {
      if (p.type === "conference" && !showConference) return false;
      if (p.type === "journal" && !showJournal) return false;

      if (!showWorkshop && p.isWorkshop) return false;
      if (!showCCFA && p.isCCFA) return false;
      if (!showBestPaper && p.isBestPaper) return false;

      if (!showConference && !showJournal) return false;

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
  }

  [conferenceTick, journalTick, workshopTick, ccfaTick, bestPaperTick, sortSelect].forEach((el) => {
    el.addEventListener("change", applyFiltersAndRender);
  });

  applyFiltersAndRender();
})();
</script>
