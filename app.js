var btnTranslate = document.querySelector("#btn-translate");

var txtArea = document.querySelector("#text-area");

var textArea = document.querySelector("#textarea");

function clicked() {
    textArea.innerText = "asdfghjkl"+ " " + txtArea.value;
};

btnTranslate.addEventListener("click",clicked);
