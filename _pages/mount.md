<!-- Sports Highlights Gallery -->
<style>
.sports-gallery {
    margin: 20px 0;
    padding: 10px 0;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.gallery-item {
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
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3em;
}

.gallery-content {
    padding: 15px;
    margin-top: 12px;
}

.gallery-content h3 {
    color: #224b8d;
    margin: 0 0 10px 0;
    font-size: 1.2em;
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
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item {
        margin-bottom: 15px;
    }
}
</style>

***
# 🏔️ Mountains Climbing and Trailing

<div class="sports-gallery">
    <div class="gallery-grid">
        <div class="gallery-item">
            <div class="gallery-image">
                <img src="/images/Mount_SGN_II.jpg" alt="Mount Siguniang II Peak">
            </div>
            <div class="gallery-content">
                <h3>Mount Siguniang II Peak (5276m)</h3>
                <p> 四川省阿坝藏族羌族自治州小金县四姑娘山-二峰 </p>
                <div class="gallery-date">June 25, 2024 @Sichuan, China</div>
            </div>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-image">
                <img src="/images/ABC.jpg" alt="Annapurna Base Camp">
            </div>
            <div class="gallery-content">
                <h3>Annapurna Base Camp Trek (4130m)</h3>
                <p>尼泊尔阿纳普尔纳大本营路线(ABC) </p>
                <div class="gallery-date">Nov. 11, 2024 @Nepal</div>
            </div>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-image">
                🗻
            </div>
            <div class="gallery-content">
                <h3>Tai Mo Shan Adventure</h3>
                <p>Hong Kong's highest mountain at 957m. Trekked through misty trails and reached the summit for incredible cloud-covered vistas.</p>
                <div class="gallery-date">3 weeks ago</div>
            </div>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-image">
                <img src="/images/mount_fuji.jpg" alt="Mount Fuji">
            </div>
            <div class="gallery-content">
                <h3>Mount Fuji Kengamine (3776m)</h3>
                <p>日本山梨县富士山吉田线-剑锋</p>
                <div class="gallery-date">July 5, 2025 @Mt. Fuji Yoshida Trail, Japan</div>
            </div>
        </div>
        

    </div>
</div>

