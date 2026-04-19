# 📝 Publications


<div class="pub-controls" id="pub-controls">
  <div class="pub-control pub-sort-control" aria-label="Publication sort controls">
    <button id="pub-sort-year" class="pub-sort-btn" type="button" aria-label="Sort by year, newest first">
      <span class="pub-sort-btn__label">Year</span>
      <span id="pub-sort-year-icon" class="pub-sort-btn__icon" aria-hidden="true">↓</span>
    </button>
  </div>

  <div class="pub-control pub-filter-ticks" aria-label="Publication filters">
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-all" checked>
      All
    </label>
    <div class="pub-filter-group" role="group" aria-label="CCF rank filters">
      <span class="pub-filter-group__label">CCF Rank</span>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-ccf-a">
        A
      </label>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-ccf-b">
        B
      </label>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-ccf-c">
        C
      </label>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-ccf-none">
        N
      </label>
    </div>
    <div class="pub-filter-group" role="group" aria-label="Publication type filters">
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-conference">
        Conference
      </label>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-journal">
        Journal
      </label>
      <label class="pub-group-tick">
        <input type="checkbox" id="pub-filter-workshop">
        Workshop
      </label>
    </div>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-bestpaper">
      Best Paper
    </label>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-oral">
      ORAL
    </label>
  </div>

</div>

<ul id="pub-list" class="pub-list"></ul>

<div class="patent-section" hidden>

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

</div>
