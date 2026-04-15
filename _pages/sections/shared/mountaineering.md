<span class='anchor' id='mount'></span>

<div class="sports-gallery">
    <div class="gallery-grid">
        {% for item in site.data.mount.items %}
        <div class="gallery-item">
            <div class="gallery-image">
                <a href="{{ item.image_src }}" aria-label="View larger photo of {{ item.image_alt }}">
                    <img src="{{ item.image_src }}" alt="{{ item.image_alt }}">
                </a>
                {% if item.flag_emoji %}
                <span class="gallery-flag">{{ item.flag_emoji }}</span>
                {% endif %}
            </div>
            <div class="gallery-content">
                <h3>{{ item.caption_en }}</h3>
                <p>{{ item.caption_zh }}</p>
                <div class="gallery-date">{{ item.date }}</div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
