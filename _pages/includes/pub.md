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

.pub-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.pub-item {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  background: #fff;
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

.pub-empty {
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 0.9rem;
  color: #64748b;
  background: #f8fafc;
}
</style>

<div class="pub-controls" id="pub-controls">
  <div class="pub-control">
    <label for="pub-filter-type">Type</label>
    <select id="pub-filter-type">
      <option value="all">All</option>
      <option value="conference">Conference</option>
      <option value="journal">Journal</option>
    </select>
  </div>

  <div class="pub-control">
    <label for="pub-filter-ccfa">CCF-A</label>
    <select id="pub-filter-ccfa">
      <option value="all">All</option>
      <option value="yes">CCF-A</option>
      <option value="no">Not CCF-A</option>
    </select>
  </div>

  <div class="pub-control">
    <label for="pub-filter-workshop">Workshop</label>
    <select id="pub-filter-workshop">
      <option value="all">All</option>
      <option value="yes">Workshop</option>
      <option value="no">Not Workshop</option>
    </select>
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

{% for paper in site.data.pubs.patents %}
- <div style="display:flex; width:100%;">

    <div style="width:15%;">
      <div class="patentid">{{ paper.pid }}</div>
    </div>

    <div style="width:85%;">
      {{ paper.title }}
    </div>
  </div>
{% endfor %}

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
  });

  const typeSelect = document.getElementById("pub-filter-type");
  const ccfaSelect = document.getElementById("pub-filter-ccfa");
  const workshopSelect = document.getElementById("pub-filter-workshop");
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
        ${links.length ? `<div class="pub-links">${links.join(" ")}</div>` : ""}
      </li>
    `;
  }

  function applyFiltersAndRender() {
    const typeVal = typeSelect.value;
    const ccfaVal = ccfaSelect.value;
    const workshopVal = workshopSelect.value;
    const sortVal = sortSelect.value;

    let filtered = publications.filter((p) => {
      if (typeVal !== "all" && p.type !== typeVal) return false;

      if (ccfaVal === "yes" && !p.isCCFA) return false;
      if (ccfaVal === "no" && p.isCCFA) return false;

      if (workshopVal === "yes" && !p.isWorkshop) return false;
      if (workshopVal === "no" && p.isWorkshop) return false;

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

  [typeSelect, ccfaSelect, workshopSelect, sortSelect].forEach((el) => {
    el.addEventListener("change", applyFiltersAndRender);
  });

  applyFiltersAndRender();
})();
</script>
