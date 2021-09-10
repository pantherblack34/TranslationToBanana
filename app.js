let btnTranslate = document.querySelector("#btnTranslate");
let inputTxt = document.querySelector("#txtInput");
let outputTxt = document.querySelector("#outputDiv");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {

    return serverUrl + "?" + "text=" + text;
}

function clickHandler(){

    let inputText = inputTxt.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {

            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })
}

btnTranslate.addEventListener("click",clickHandler);



