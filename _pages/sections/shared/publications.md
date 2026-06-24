{% if page.lang == "zh" %}
# 📝 论文发表
{% else %}
# 📝 Publications
{% endif %}


<div class="pub-controls" id="pub-controls">
  <div class="pub-primary-controls">
    <div class="pub-control pub-sort-control" aria-label="Publication sort controls">
      <button id="pub-sort-year" class="pub-sort-btn" type="button" aria-label="Sort by year, newest first">
        <span class="pub-sort-btn__label">Year</span>
        <span id="pub-sort-year-icon" class="pub-sort-btn__icon" aria-hidden="true">↓</span>
      </button>
    </div>
    <label class="pub-tick">
      <input type="checkbox" id="pub-filter-all" checked>
      <span class="pub-filter-text">All<span class="pub-filter-count" data-pub-count="all"></span></span>
    </label>
  </div>

  <div class="pub-filter-group" role="group" aria-label="CCF rank filters">
    <span class="pub-filter-group__label">CCF</span>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-ccf-a">
      <span class="pub-filter-text">A<span class="pub-filter-count" data-pub-count="ccf-a"></span></span>
    </label>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-ccf-b">
      <span class="pub-filter-text">B<span class="pub-filter-count" data-pub-count="ccf-b"></span></span>
    </label>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-ccf-c">
      <span class="pub-filter-text">C<span class="pub-filter-count" data-pub-count="ccf-c"></span></span>
    </label>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-ccf-none">
      <span class="pub-filter-text">N<span class="pub-filter-count" data-pub-count="ccf-none"></span></span>
    </label>
  </div>
  <div class="pub-filter-group" role="group" aria-label="Publication type filters">
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-conference">
      <span class="pub-filter-text">Conf.<span class="pub-filter-count" data-pub-count="conference"></span></span>
    </label>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-journal">
      <span class="pub-filter-text">Journal<span class="pub-filter-count" data-pub-count="journal"></span></span>
    </label>
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-workshop">
      <span class="pub-filter-text">Workshop<span class="pub-filter-count" data-pub-count="workshop"></span></span>
    </label>
  </div>
  <div class="pub-filter-group" role="group" aria-label="Publication highlight filters">
    <label class="pub-group-tick">
      <input type="checkbox" id="pub-filter-award">
      <span class="pub-filter-text">Award<span class="pub-filter-count" data-pub-count="award"></span></span>
    </label>
  </div>

  <div class="pub-topic-row">
    <div class="pub-topic-filter-group" role="group" aria-label="Research topic filters">
      <span class="pub-topic-label">Topics</span>
      <label class="pub-topic-tick">
        <input type="checkbox" id="pub-filter-topic-privacy">
        <span class="pub-filter-text">Privacy<span class="pub-filter-count" data-pub-count="topic-privacy"></span></span>
      </label>
      <label class="pub-topic-tick">
        <input type="checkbox" id="pub-filter-topic-sustainability">
        <span class="pub-filter-text">Sustainable<span class="pub-filter-count" data-pub-count="topic-sustainability"></span></span>
      </label>
      <label class="pub-topic-tick">
        <input type="checkbox" id="pub-filter-topic-performance">
        <span class="pub-filter-text">Performance<span class="pub-filter-count" data-pub-count="topic-performance"></span></span>
      </label>
      <label class="pub-topic-tick">
        <input type="checkbox" id="pub-filter-topic-edge-ai">
        <span class="pub-filter-text">Edge AI<span class="pub-filter-count" data-pub-count="topic-edge-ai"></span></span>
      </label>
    </div>
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
