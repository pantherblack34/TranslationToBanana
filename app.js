const btnTranslate = document.querySelector("#btn-translate");

var txtArea = document.querySelector("#text-area");

console.log(txtArea);




btnTranslate.addEventListener("click", function clicked() {
    console.log("clicked")
    console.log("input", txtArea.value);
});

