# 📝 Publications 

## Conference Papers

{% for paper in site.data.pubs.fontpages %}
<div class="paper-box" style="display:flex; align-items:center; width:100%; padding:0.5em 0 1em 0;">
  <div class="paper-box-image" style="flex:1; padding-right:0.5em; max-width:22.5%; min-width:100px;">
    <div style="padding-right:0.5em;">
      <div class="badge">{{ paper.abbrv }}</div>
      <img src="{{ paper.imgurl }}" alt="Thumbnail for {{ paper.title }}" style="width:100%; height:auto;">
    </div>
  </div>

  <div class="paper-box-text" style="padding-left:1em; max-width:77.5%;">
    <div style="display:flex; width:100%;">

      <div style="width:90%; min-width:0;">
        <!-- LINE 1: tags only -->
        <div style="margin-bottom:2px;">
          <span class="badge2">{{ paper.abbrv }}</span>
          {% if paper.papertype %}
            <span class="typemark">{{ paper.papertype }}</span>
          {% endif %}
          {% if paper.bestpaper %}
            <span style="background:#fbbf24; color:#111827; border-radius:999px; padding:2px 8px; font-size:0.8em; font-weight:600; white-space:nowrap; margin-left:4px;">
              🏆 {{ paper.bestpaper }}
            </span>
          {% endif %}
        </div>

        <!-- LINE 2: title only (allowed to wrap) -->
        <div style="font-size:17px; font-weight:600; margin-bottom:2px;">
          <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
        </div>

        <!-- Authors + venue -->
        <div style="font-size:15px; margin-top:2px;">
          {{ paper.author }}<br>
          <u><i>Proc. of {{ paper.conference }}</i></u>, {{ paper.address }}, {{ paper.date }}
        </div>
      </div>

      <!-- Right column: links -->
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
- <div style="display:flex; width:100%; align-items:flex-start; gap:0.75em;">

    <div style="flex:1; min-width:0;">
      <!-- LINE 1: tags only -->
      <div style="margin-bottom:2px;">
        <span class="badge2">{{ paper.abbrv }}</span>
        {% if paper.papertype %}
          <span class="typemark">{{ paper.papertype }}</span>
        {% endif %}
        {% if paper.bestpaper %}
          <span style="background:#fbbf24; color:#111827; border-radius:999px; padding:2px 8px; font-size:0.8em; font-weight:600; white-space:nowrap; margin-left:4px;">
            🏆 {{ paper.bestpaper }}
          </span>
        {% endif %}
        {% if paper.badgeurl %}
          <span style="margin-left:4px;">
            <img src="{{ paper.badgeurl }}" alt="ranking badge">
          </span>
        {% endif %}
      </div>

      <!-- LINE 2: title only -->
      <div style="font-size:16px; font-weight:600; margin-bottom:2px;">
        <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
      </div>

      <!-- Authors + venue -->
      <div style="margin-top:2px;">
        {{ paper.author }}<br>
        <u><i>Proc. of {{ paper.conference }}</i></u>, {{ paper.address }}, {{ paper.date }}
      </div>
    </div>

    <!-- Right column: links -->
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

<!-- * indicates equal contributions (co-first author). -->

***

## Journals

{% for paper in site.data.pubs.journals %}
- <div style="display:flex; width:100%; align-items:flex-start; gap:0.75em;">

    <div style="flex:1; min-width:0;">
      <!-- LINE 1: tag + optional badge -->
      <div style="margin-bottom:2px;">
        <span class="badge2">{{ paper.abbrv }}</span>
        {% if paper.badgeurl %}
          <span style="margin-left:4px;">
            <img src="{{ paper.badgeurl }}" alt="ranking badge">
          </span>
        {% endif %}
      </div>

      <!-- LINE 2: title -->
      <div style="font-size:16px; font-weight:600; margin-bottom:2px;">
        <a href="{{ paper.paperurl }}">{{ paper.title }}</a>
      </div>

      <!-- Authors + journal info -->
      <div style="margin-top:2px;">
        {{ paper.author }}<br>
        <u><i>{{ paper.conference }}</i></u>, {{ paper.page }}, {{ paper.date }}
      </div>
    </div>

    <!-- Right column: links -->
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
