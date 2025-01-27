# 📝 Publications 

## Conference Papers
{% for paper in site.data.pubs.fontpages %}
<div class='paper-box' style="display: flex; align-items: center; width: 100%;">
<div class='paper-box-image' style="flex: 1; padding-right: 0.5em; max-width: 22.5%; min-width: 100px;">
    <div style="padding-right: 0.5em;">
        <div class="badge">{{paper.abbrv}}</div>
            <img src='{{paper.imgurl}}' alt="sym" width="100%">
        </div>
</div>
<div class='paper-box-text' style= "padding-left: 1em; max-width: 77.5%;">
    <div style="display: flex; width: 100%;">
        <div style="width: 90%;">
            <a href= "{{paper.paperurl}}"> {{paper.title}} </a> <br>
            {{paper.author}} <br>
            <u><i>Proceedings of {{paper.conference}}</i></u>, {{paper.address}}, {{paper.date}}
        </div>
        <div style="width: 10%; text-align: right;"><a href="{{paper.downloadurl}}">[Paper]</a>        
            {% if {{paper.slidesurl}} %}
                <a href="{{ paper.slidesurl}}">[Slides]</a>
            {% endif %}
            {% if {{paper.videourl}} %}
                <a href="{{ paper.videourl}}">[Video]</a>
            {% endif %}
        </div>
    </div>
</div>
</div>
{% endfor %}

{% include base_path %}
{% for paper in site.data.pubs.conferences %}
- <div style="display: flex; width: 100%;">
    <div style="width: 90%;">
        <div class="badge2">{{paper.abbrv}}</div> 
            <a href="{{paper.paperurl}}"> {{paper.title}} </a>
            <br>
            {{paper.author}}
            <br>
            <u><i>Proceedings of {{paper.conference}}</i></u>, {{paper.address}}, {{paper.date}}
    </div>
    <div style="width: 10%; text-align: right;"><a href="{{paper.downloadurl}}">[Paper]</a>
        {% if {{paper.slidesurl}} %}
            <a href="{{ paper.slidesurl }}">[Slides]</a>
        {% endif %}
        {% if {{paper.videourl}} %}
                <a href="{{ paper.videourl}}">[Video]</a>
        {% endif %}
    </div></div>
{% endfor %}

***

## Journals
{% for paper in site.data.pubs.journals %}
- <div style="display: flex; width: 100%;">
    <div style="width: 90%;">
    <div class="badge2">{{paper.abbrv}}</div> 
        <a href="{{paper.paperurl}}"> "{{paper.title}}"</a> 
        <br>
            {{paper.author}} 
        <br>
        <u><i>{{paper.conference}}</i></u>, {{paper.page}}, {{paper.date}} 
    </div>
    <div style="width: 10%; text-align: right;"> <a href="{{paper.downloadurl}}">[Paper]</a>
    </div>
</div>
{% endfor %}

***

<!-- \* indicates equal contributions (co-first author). -->

***
## Patents
{% for paper in site.data.pubs.patents %}
- {{paper.title}}, <i>{{paper.pid}}</i>.
{% endfor %}

***
