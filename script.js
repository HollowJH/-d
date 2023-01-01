const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const save = document.getElementById("save-text-file");
const text = document.getElementById("convert");

upper.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
});

lower.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
});

proper.addEventListener("click", () => {
    text.value = text.value.toLowerCase().replace(/(^\w|\s\w)/g  , function(char) {
        return char.toUpperCase();
    });
});

sentence.addEventListener("click", () => {
    text.value = text.value.toLowerCase().split(/\.\s+/).map(sentence => sentence.charAt(0).toUpperCase() +
        sentence.slice(1)).join('. ');
});

save.addEventListener("click", () => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    element.setAttribute('download', "text");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
})