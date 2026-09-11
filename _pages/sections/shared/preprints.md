{% if site.data.pubs.preprints %}
{% if page.lang == "zh" %}
# 🧾 Preprints
{% else %}
# 🧾 Preprints
{% endif %}

<ul class="preprint-simple-list">
{% for paper in site.data.pubs.preprints %}
  <li class="preprint-simple-item">
    <div class="preprint-simple-title">
      {% if paper.display_date %}<span class="preprint-simple-date">[{{ paper.display_date }}]</span>{% endif %}
      {% if paper.links.paper %}
        <a href="{{ paper.links.paper }}"><strong>{{ paper.title }}</strong></a>
      {% else %}
        <strong>{{ paper.title }}</strong>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>

***
{% endif %}
