# 📝 Publications 

## Conference Papers

{% for paper in site.data.pubs.fontpages %}
<div class="paper-box" style="display:flex; align-items:center; width:100%; padding:0.5em 0 1em 0;">
  <div class="paper-box-image" style="flex:1; padding-right:0.5em; max-width:22.5%; min-width:100px;">
    <div style="padding-right:0.5em;">
      <div class="badge">{{ paper.abbrv }}</div>
      <img src="{{ paper.imgurl }}" alt="preview image of {{ paper.title }}" style="width:100%; height:auto;">
    </div>
  </div>

  <div class="paper-box-text" style="padding-left:1em; max-width:77.5%;">
    <div style="display:flex; width:100%;">

      <div style="width:90%; min-width:0;">
        <!-- tags + title in one row, but separated into flex blocks -->
        <div style="display:flex; align-items:baseline; gap:0.4em; flex-wrap:nowrap;">
          <span class="badge2">{{ paper.abbrv }}</span>
          {% if paper.papertype %}
            <span class="typemark">{{ paper.papertype }}</span>
          {% endif %}
          {% if paper.bestpaper %}
            <span style="background:#fbbf24; color:#111827; border-radius:999px; padding:2px 8px; font-size:0.8em; font-weight:600; white-space:nowrap;">
              🏆 {{ paper.bestpaper }}
            </span>
          {% endif %}
          <span style="font-size:17px; font-weight:600; min-width:0;">
            <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
          </span>
        </div>

        <div style="font-size:15px; margin-top:2px;">
          {{ paper.author }}<br>
          <u><i>Proc. of {{ paper.conference }}</i></u>, {{ paper.address }}, {{ paper.date }}
        </div>
      </div>

      <div style="width:10%; text-align:right; white-space:nowrap;">
        {% if paper.downloadurl %}
          <a href="{{ paper.downloadurl }}">[Paper]</a>
        {% endif %}
        {% if paper.slidesurl %}
          <a href="{{ paper.slidesurl }}">[Slides]</a>
        {% endif %}
        {% if paper.videourl %}
          <a href="{{ paper.videourl }}">[Video]</a>
        {% endif %}
        {% if paper.posterurl %}
          <a href="{{ paper.posterurl }}">[Poster]</a>
        {% endif %}
      </div>

    </div>
  </div>
</div>
{% endfor %}

{% include base_path %}

{% for paper in site.data.pubs.conferences %}
- <div style="display:flex; width:100%; gap:0.6em;">

    <div style="flex:1; min-width:0;">
      <!-- FIRST ROW: tags + title on the same line, but in separate flex items -->
      <div style="display:flex; align-items:baseline; gap:0.4em; flex-wrap:nowrap;">
        <span class="badge2">{{ paper.abbrv }}</span>

        {% if paper.papertype %}
          <span class="typemark">{{ paper.papertype }}</span>
        {% endif %}

        {% if paper.bestpaper %}
          <span style="background:#fbbf24; color:#111827; border-radius:999px; padding:2px 8px; font-size:0.8em; font-weight:600; white-space:nowrap;">
            🏆 {{ paper.bestpaper }}
          </span>
        {% endif %}

        <!-- Title block: this is the only part allowed to wrap -->
        <span style="font-size:16px; font-weight:600; min-width:0;">
          <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
        </span>
      </div>

      <!-- SECOND ROW: authors, ranking badge, venue -->
      <div style="margin-top:2px;">
        {{ paper.author }}<br>
        {% if paper.badgeurl %}
          <img src="{{ paper.badgeurl }}" alt="ranking badge">
        {% endif %}
        <u><i>Proc. of {{ paper.conference }}</i></u>, {{ paper.address }}, {{ paper.date }}
      </div>
    </div>

    <!-- RIGHT COLUMN: links -->
    <div style="width:110px; text-align:right; white-space:nowrap;">
      {% if paper.downloadurl %}
        <a href="{{ paper.downloadurl }}">[Paper]</a>
      {% endif %}
      {% if paper.slidesurl %}
        <a href="{{ paper.slidesurl }}">[Slides]</a>
      {% endif %}
      {% if paper.videourl %}
        <a href="{{ paper.videourl }}">[Video]</a>
      {% endif %}
      {% if paper.posterurl %}
        <a href="{{ paper.posterurl }}">[Poster]</a>
      {% endif %}
    </div>

  </div>
{% endfor %}

***

## Journals

{% for paper in site.data.pubs.journals %}
- <div style="display:flex; width:100%; gap:0.6em;">

    <div style="flex:1; min-width:0;">
      <!-- FIRST ROW: journal tag + title on same line -->
      <div style="display:flex; align-items:baseline; gap:0.4em; flex-wrap:nowrap;">
        <span class="badge2">{{ paper.abbrv }}</span>
        {% if paper.badgeurl %}
          <span style="margin-left:2px;">
            <img src="{{ paper.badgeurl }}" alt="ranking badge">
          </span>
        {% endif %}
        <span style="font-size:16px; font-weight:600; min-width:0;">
          <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
        </span>
      </div>

      <!-- SECOND ROW: authors + venue -->
      <div style="margin-top:2px;">
        {{ paper.author }}<br>
        <u><i>{{ paper.conference }}</i></u>, {{ paper.page }}, {{ paper.date }}
      </div>
    </div>

    <div style="width:110px; text-align:right; white-space:nowrap;">
      {% if paper.downloadurl %}
        <a href="{{ paper.downloadurl }}">[Paper]</a>
      {% endif %}
    </div>

  </div>
{% endfor %}

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
