<span class='anchor' id='mount'></span>

<div class="sports-gallery">
    <div class="gallery-grid">
        {% for item in site.data.mount.items %}
        {% assign image_filename = item.image_src | split: "/" | last %}
        {% assign generated_like_id = image_filename | split: "." | first | slugify %}
        {% assign raw_like_id = item.id | default: generated_like_id %}
        {% assign like_id = raw_like_id | slugify %}
        {% assign caption_en_html = item.caption_en | markdownify | remove: "<p>" | remove: "</p>" %}
        {% assign caption_en_text = item.caption_en | markdownify | strip_html | strip_newlines %}
        <div class="gallery-item">
            <div class="gallery-image">
                <a href="{{ item.image_src }}" aria-label="View larger photo of {{ item.image_alt }}">
                    <img src="{{ item.image_src }}" alt="{{ item.image_alt }}">
                </a>
                {% assign location_badge = item.country_code %}
                {% if location_badge %}
                {% assign flag_code = location_badge | downcase %}
                <span class="gallery-flag" aria-label="{{ location_badge }} flag" title="{{ location_badge }}">
                    <img src="/images/flags/{{ flag_code }}.svg" alt="">
                </span>
                {% endif %}
                <button
                    class="gallery-like"
                    type="button"
                    data-like-id="{{ like_id }}"
                    aria-label="Like {{ caption_en_text }}"
                    aria-pressed="false">
                    <span class="gallery-like-icon" aria-hidden="true">&hearts;</span>
                    <span class="gallery-like-count" data-like-count>0</span>
                </button>
            </div>
            <div class="gallery-content">
                <h3>{{ caption_en_html }}</h3>
                <p>{{ item.caption_zh }}</p>
                <div class="gallery-date">{{ item.date }}</div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
