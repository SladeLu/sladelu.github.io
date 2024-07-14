# 📝 Publications 

## Conference Paper

<div class='paper-box'>
<div class='paper-box-image'>
    <div>
        <div class="badge">MM'23</div>
            <img src='/images/pagoda_frontpage.jpg' alt="sym" width="90%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

["Pagoda: Privacy Protection for Volumetric Video Streaming through Poisson Diffusion Model"](https://dl.acm.org/doi/abs/10.1145/3581783.3611946), in Proceedings of <u><i> the 31st ACM International Conference on Multimedia (MM '23)</i></u>, Ottawa, Canada, Oct. 2023.

**Rui Lu**, L. Wei, S. Zhu, C. Hu, D. Wang,

[**Paper**](http://www4.comp.polyu.edu.hk/~csdwang/Publication/MM23.pdf)|[**Slides**]()

</div>
</div>

{% include base_path %}
{% for paper in site.data.pubs.conferences %}
- <div style="display: flex; width: 100%;">
    <div style="width: 87.5%;">
    <div class="badge2">{{paper.abbrv}}</div> {{paper.author}}, <a href="{{paper.paperurl}}"> "{{paper.title}}"</a>, in Proceedings of <u><i>{{paper.conference}}</i></u>, {{paper.address}}, {{paper.date}}. </div>
    <div style="width: 12.5%; text-align: right;"><a href="{{paper.downloadurl}}">[Download Paper]</a></div></div>
{% endfor %}

***

## Journals
{% for paper in site.data.pubs.journals %}
- <div style="display: flex; width: 100%;">
    <div style="width: 87.5%;">
    <div class="badge2">{{paper.abbrv}}</div> {{paper.author}}, <a href="{{paper.paperurl}}"> "{{paper.title}}"</a>, in <u><i>{{paper.conference}}</i></u>, {{paper.page}}, {{paper.date}}. </div>
    <div style="width: 12.5%; text-align: right;"> <a href="{{paper.downloadurl}}">[Download Paper]</a></div></div>
{% endfor %}

***

\* indicates equal contributions (co-first author).

***
## Patents
{% for paper in site.data.pubs.patents %}
- {{paper.title}}, <i>{{paper.pid}}</i>.
{% endfor %}

***
