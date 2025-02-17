<span class='anchor' id='about-me'></span>

<p id="sentenceToCopy"> Rui Lu is a postdoctoral fellow at the Hong Kong Polytechnic University where he completed his Ph.D. in 2024. Before that, he graduated with a B.Eng in Computer Science and Technology from the Southern University of Science and Technology in 2019. His research interests are Edge Computing, Video Analytics, Privacy Protection, and Large Language Model Inference.</p>

<!-- Button that triggers the copy action -->
<button onclick="copySentence()">Copy Sentence</button>

<script>
    // Function to copy the sentence
    function copySentence() {
        const sentence = document.getElementById('sentenceToCopy').textContent;
        navigator.clipboard.writeText(sentence)
            .then(() => {
                alert('Sentence copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy sentence:', err);
                alert('Failed to copy sentence.');
            });
    }
</script>
# About me 

I am currently a postdoctoral researcher, starting in December 2024. I completed my Ph.D. in 2024 from the Department of Computing at The Hong Kong Polytechnic University ([HK PolyU](https://www.polyu.edu.hk/)).
Prior to that, I graduated with a B.Eng in Computer Science and Technology from the Southern University of Science and Technology ([SUSTech](https://www.sustech.edu.cn/en/)) in 2019. My research interests are centered around Edge Computing, Video Analytics, Privacy Protection, and Large Language Model Inference.

***
