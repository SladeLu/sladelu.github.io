# 📝 Publications


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
      <input type="checkbox" id="pub-filter-conference">
      Conference
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-journal">
      Journal
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-workshop">
      Workshop
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-bestpaper">
      Best Paper
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-oral">
      ORAL
    </label>
  </div>

  <details class="pub-control pub-ccf-menu">
    <summary class="pub-ccf-trigger">CCF</summary>
    <div class="pub-ccf-panel">
      <label class="pub-ccf-option">
        <input type="checkbox" id="pub-filter-ccf-a">
        CCF-A
      </label>
      <label class="pub-ccf-option">
        <input type="checkbox" id="pub-filter-ccf-b">
        CCF-B
      </label>
      <label class="pub-ccf-option">
        <input type="checkbox" id="pub-filter-ccf-c">
        CCF-C
      </label>
      <label class="pub-ccf-option">
        <input type="checkbox" id="pub-filter-ccf-none">
        CCF-None
      </label>
    </div>
  </details>

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
