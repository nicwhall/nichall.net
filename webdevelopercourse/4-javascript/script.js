//====================================================================
// INLINE SCRIPT
//====================================================================
//set variables
let start = new Date().getTime();
let color = getRandomColor();

appearAfterDelay();

document.getElementById("shape").onclick = function() {

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();

}
//====================================================================
//FUNCTIONS
//=====================================================================
//make shape appear after delay
function appearAfterDelay() {
    document.getElementById("shape").style.display = "none";
    setTimeout(makeShapeAppear, Math.random() + 2000);
}

//get color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {

    let top = (getRandomNumber() * 400);
    let left = Math.random() * 400;
    let width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.border = "2px black solid";
    start = new Date().getTime();
}

function getRandomNumber(){
    return randomNumber = Math.random();
}