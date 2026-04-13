<span class='anchor' id='mount'></span>

<style>
.sports-gallery {
    margin: 5px 0 20px 0;
    padding: 0px 0;
}

.sports-gallery h2 {
    color: #224b8d;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 2px solid #224b8d;
    padding-bottom: 10px;
}

.gallery-grid {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    margin-top: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    scroll-behavior: smooth;
}

.gallery-item {
    flex: 0 0 320px;
    background: #f8f9fa;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.gallery-image {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.gallery-image a {
    display: block;
    cursor: zoom-in;
}

.gallery-image a:focus {
    outline: 3px solid #93c5fd;
    outline-offset: -3px;
}

.gallery-image img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
}

.gallery-flag {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.6em;
    line-height: 1;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 8px;
    padding: 2px 6px;
}

.gallery-content {
    padding: 15px;
    margin-top: 12px;
}

.gallery-content h3 {
    color: #224b8d;
    margin: 0 0 10px 0;
    font-size: 1.1em;
}

.gallery-content p {
    color: #666;
    margin: 0;
    line-height: 1.5;
    font-size: 0.9em;
}

.gallery-date {
    color: #999;
    font-size: 0.8em;
    font-style: italic;
    margin-top: 8px;
}

@media (max-width: 768px) {
    .gallery-item {
        flex-basis: 85%;
    }
}
</style>

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
