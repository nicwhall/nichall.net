"strict";

const audioElement = document.getElementById("audio");
const button = document.getElementById("button");
const speechKeys = {
    key: "c1e68eec4c0a4914bdf9606358901738",
    src: "Hello, world!",
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false
};

function toggleButton() {
    button.disabled = !button.disabled;
}

// get jokes from joke api
async function getJoke() {
    toggleButton();
    let joke = "";
    const apiUrl =
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = `${data.joke}`;
        }
        speechKeys.src = joke;
        VoiceRSS.speech(speechKeys);
        console.log(joke);
    } catch (error) {
        console.log("joke api failed", error);
    }
}

button.addEventListener("click", function (e) {
    getJoke(e);
});
audioElement.addEventListener("ended", function (e) {
    toggleButton(e);
});
