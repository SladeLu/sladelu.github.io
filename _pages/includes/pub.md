# 📝 Publications 
## Conference Papers
{% for paper in site.data.pubs.fontpages %}
<div class='paper-box'>
<div class='paper-box-image'>
    <div>
        <div class="badge">{{paper.abbrv}}</div>
            <img src='{{paper.imgurl}}' alt="sym" width="90%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">
<div style="display: flex; width: 100%;">
    <div style="width: 100%;">
    <div class="badge2">{{paper.abbrv}}</div> <a href="{{paper.paperurl}}"> "{{paper.title}}"</a>, {{paper.author}}, in Proceedings of <u><i>{{paper.conference}}</i></u>, {{paper.address}}, {{paper.date}}. </div>
    <div style="width: 12.5%; text-align: right;"><a href="{{paper.downloadurl}}">[Paper]</a><a href="{{ paper.slidesurl}}">[Slides]</a></div>
</div>
</div>
{% endfor %}

{% include base_path %}
{% for paper in site.data.pubs.conferences %}
- <div style="display: flex; width: 100%;">
    <div style="width: 87.5%;">
    <div class="badge2">{{paper.abbrv}}</div> <a href="{{paper.paperurl}}"> "{{paper.title}}"</a>, {{paper.author}}, in Proceedings of <u><i>{{paper.conference}}</i></u>, {{paper.address}}, {{paper.date}}. </div>
    <div style="width: 12.5%; text-align: right;"><a href="{{paper.downloadurl}}">[Paper]</a><a href="{{paper.slidesurl}}">[Slides]</a></div></div>
{% endfor %}

***

## Journals
{% for paper in site.data.pubs.journals %}
- <div style="display: flex; width: 100%;">
    <div style="width: 87.5%;">
    <div class="badge2">{{paper.abbrv}}</div> <a href="{{paper.paperurl}}"> "{{paper.title}}"</a>, {{paper.author}}, in <u><i>{{paper.conference}}</i></u>, {{paper.page}}, {{paper.date}}. </div>
    <div style="width: 12.5%; text-align: right;"> <a href="{{paper.downloadurl}}">[Paper]</a>
        {% if {{paper.slidesurl}} %}
            <a href="{{ paper.slidesurl }}">[Slides]</a>
        {% endif %}
    </div></div>
{% endfor %}

***

<!-- \* indicates equal contributions (co-first author). -->

***
## Patents
{% for paper in site.data.pubs.patents %}
- {{paper.title}}, <i>{{paper.pid}}</i>.
{% endfor %}

***
