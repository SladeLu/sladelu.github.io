{% assign intro = site.data.intro.zh %}

<span class='anchor' id='about-me'></span>

<input type="hidden" id="sentenceToCopy" value="{{ intro.copy_text | escape }}">

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

<div style="display: flex; width: 100%; justify-content: space-between; align-items: center;">
        <div style="width: 90%">
        <h1> {{ intro.title }} </h1>
        </div>
        <div style="width: 10% text-align: right;">
            <span class="clickable-text" onclick="copySentence()">{{ intro.copy_label }}</span>
        </div>
</div>

{{ intro.body | markdownify }}

***
