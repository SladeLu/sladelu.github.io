<span class='anchor' id='about-me'></span>
<style>
        .clickable-text {
            color: #224b8d;
            text-decoration: underline;
            cursor: pointer;
        }
</style>

<input type="hidden" id="sentenceToCopy" value="Rui Lu is a postdoctoral fellow at the Hong Kong Polytechnic University where he completed his Ph.D. in 2024. Before that, he graduated with a B.Eng in Computer Science and Technology from the Southern University of Science and Technology in 2019. His research interests are Edge Computing, Video Analytics, Privacy Protection, and Large Language Model Inference.">

<script>
    // Function to copy the sentence
    function copySentence() {
        const sentence = document.getElementById('sentenceToCopy').value;
        navigator.clipboard.writeText(sentence)
            .then(() => {
                console.log('Sentence copied to clipboard!');
            })
            .catch(err => {
                console.log('Failed to copy sentence.');
            });
    }
</script>

<div style="display: flex; width: 100%;">
        <div style="width: 90%">
        <h1> About me </h1>
        </div>
        <div style="width: 10%">
            <span class="clickable-text" onclick="copySentence()">[copy]</span>
        </div>
</div>


I am currently a postdoctoral researcher, starting in December 2024. I completed my Ph.D. in 2024 from the Department of Computing at The Hong Kong Polytechnic University ([HK PolyU](https://www.polyu.edu.hk/)).
Prior to that, I graduated with a B.Eng in Computer Science and Technology from the Southern University of Science and Technology ([SUSTech](https://www.sustech.edu.cn/en/)) in 2019. My research interests are centered around Edge Computing, Video Analytics, Privacy Protection, and Large Language Model Inference.

***
