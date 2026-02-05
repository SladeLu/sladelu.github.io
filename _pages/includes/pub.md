# 📝 Publications

<style>
.pub-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin: 0.2rem 0 0.35rem 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.pub-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: auto;
  gap: 0;
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

.pub-sort-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.22rem 0.56rem;
  height: 30px;
  box-sizing: border-box;
  border-radius: 999px;
  border: 1px solid rgba(37, 99, 235, 0.32);
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #1e3a8a;
  font-size: 0.86em;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
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
  padding-bottom: 0;
}

.pub-tick {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.35rem;
  padding: 0.22rem 0.56rem;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: #fff;
  color: #334155;
  font-size: 0.86em;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  user-select: none;
}

.pub-tick input[type="checkbox"] {
  margin: 0;
  width: 14px;
  height: 14px;
  display: block;
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

.pub-head .badge2,
.pub-head .typemark,
.pub-head .bestpaper-award,
.pub-head .ccfa-chip {
  display: inline-flex;
  align-items: center;
  height: 24px;
  box-sizing: border-box;
  font-size: 0.8em;
  line-height: 1;
  vertical-align: middle;
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

.ccfa-chip {
  display: inline-flex;
  align-items: center;
  margin-left: 0.25rem;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(185, 28, 28, 0.32);
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #991b1b;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.02em;
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
  <div class="pub-control">
    <button id="pub-sort-year" class="pub-sort-btn" type="button" aria-label="Toggle year sort order">Year</button>
  </div>

  <div class="pub-control pub-filter-ticks">
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-all" checked>
      All
    </label>
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
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-oral" checked>
      ORAL
    </label>
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
    {% for paper in site.data.pubs.publications %}
    {
      type: {{ paper.type | jsonify }},
      abbrv: {{ paper.abbrv | jsonify }},
      title: {{ paper.title | jsonify }},
      author: {{ paper.author | jsonify }},
      venue: {{ paper.venue | jsonify }},
      address: {{ paper.address | jsonify }},
      page: {{ paper.page | jsonify }},
      date: {{ paper.date | jsonify }},
      tags: {{ paper.tags | jsonify }},
      links: {{ paper.links | jsonify }}
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
    const tags = Array.isArray(p.tags) ? p.tags : [];
    const normalizedTags = tags.map((t) => String(t).toLowerCase());
    p.normalizedTags = normalizedTags;
    p.dateValue = parseDateValue(p.date);
    p.isCCFA = normalizedTags.includes("ccf-a");
    p.isWorkshop = normalizedTags.includes("workshop");
    p.isBestPaper = normalizedTags.includes("best paper");
    p.isOral = normalizedTags.includes("oral");
  });

  const allTick = document.getElementById("pub-filter-all");
  const conferenceTick = document.getElementById("pub-filter-conference");
  const journalTick = document.getElementById("pub-filter-journal");
  const workshopTick = document.getElementById("pub-filter-workshop");
  const ccfaTick = document.getElementById("pub-filter-ccfa");
  const bestPaperTick = document.getElementById("pub-filter-bestpaper");
  const oralTick = document.getElementById("pub-filter-oral");
  const sortYearBtn = document.getElementById("pub-sort-year");
  const listEl = document.getElementById("pub-list");
  let sortOrder = "new";

  function renderItem(p) {
    const paperUrl = p.links && p.links.paper ? p.links.paper : "";
    const titleHtml = hasValue(paperUrl)
      ? `<a href="${paperUrl}">${p.title || "Untitled"}</a>`
      : `${p.title || "Untitled"}`;

    const typeBadgeClass = p.type === "conference" ? "badge2 badge2--conference" : "badge2 badge2--journal";
    const kindLabel = p.type === "conference" ? "Conference" : "Journal";

    const links = [];
    if (p.links && hasValue(p.links.download)) links.push(`<a href="${p.links.download}">[Paper]</a>`);
    if (p.links && hasValue(p.links.slides)) links.push(`<a href="${p.links.slides}">[Slides]</a>`);
    if (p.links && hasValue(p.links.video)) links.push(`<a href="${p.links.video}">[Video]</a>`);
    if (p.links && hasValue(p.links.poster)) links.push(`<a href="${p.links.poster}">[Poster]</a>`);

    const workshopTag = p.isWorkshop ? `<span class="typemark" data-type="workshop">Workshop</span>` : "";
    const oralTag = p.isOral ? `<span class="typemark" data-type="oral">ORAL</span>` : "";
    const bestPaperTag = p.isBestPaper ? `<span class="bestpaper-award">🏆 Best Paper</span>` : "";
    const ccfBadge = p.isCCFA ? `<span class="ccfa-chip">CCF-A</span>` : "";

    const venueLine = p.type === "conference"
      ? `<u><i>Proc. of ${p.venue || ""}</i></u>, ${p.address || ""}, ${p.date || ""}`
      : `<u><i>${p.venue || ""}</i></u>${hasValue(p.page) ? `, ${p.page}` : ""}, ${p.date || ""}`;

    return `
      <li class="pub-item">
        <div class="pub-main">
          <div class="pub-head">
            <span class="${typeBadgeClass}">${p.abbrv || kindLabel}</span>
            ${oralTag}
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
    const showOral = oralTick.checked;
    const sortVal = sortOrder;

    let filtered = publications.filter((p) => {
      if (p.type === "conference" && !showConference) return false;
      if (p.type === "journal" && !showJournal) return false;

      if (!showWorkshop && p.isWorkshop) return false;
      if (!showCCFA && p.isCCFA) return false;
      if (!showBestPaper && p.isBestPaper) return false;
      if (!showOral && p.isOral) return false;

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

  allTick.addEventListener("change", () => {
    const checked = allTick.checked;
    conferenceTick.checked = checked;
    journalTick.checked = checked;
    workshopTick.checked = checked;
    ccfaTick.checked = checked;
    bestPaperTick.checked = checked;
    oralTick.checked = checked;
    applyFiltersAndRender();
  });

  [conferenceTick, journalTick, workshopTick, ccfaTick, bestPaperTick, oralTick].forEach((el) => {
    el.addEventListener("change", () => {
      const allChecked = conferenceTick.checked && journalTick.checked && workshopTick.checked && ccfaTick.checked && bestPaperTick.checked && oralTick.checked;
      allTick.checked = allChecked;
      applyFiltersAndRender();
    });
  });

  sortYearBtn.addEventListener("click", () => {
    sortOrder = sortOrder === "new" ? "old" : "new";
    applyFiltersAndRender();
  });

  applyFiltersAndRender();
})();
</script>
