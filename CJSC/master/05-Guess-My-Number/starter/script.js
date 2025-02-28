'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

//==================================================
//LOSE DISPLAY
//==================================================
function youLose() {
    setMessage('💥 You Lose');
    document.body.style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    setNumber(secretNumber);
}

//==================================================
//SET MESSAGE
//==================================================
function setMessage(message) {
    document.querySelector('.message').textContent = message;
}

//==================================================
//SET SECRET NUMBER
//==================================================
function setNumber(number) {
    document.querySelector('.number').textContent = number;
}

//==================================================
//AGAIN BUTTON CLICKED
//==================================================
document.querySelector('.again').addEventListener('click', function () {
    //reset
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.body.style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '15rem';
    setNumber('?');
    document.querySelector('.guess').value = null;
    setMessage('Start guessing...');
});

//==================================================
//CHECK BUTTON CLICKED
//==================================================
document.querySelector('.check').addEventListener('click', function () {
    //get guess
    const guess = Number(document.querySelector('.guess').value);

    //check for guess value
    if (!guess) {
        setMessage('⛔ Enter a number!');
    } else if (guess === secretNumber) {
        setMessage('🎉 Correct Number');
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        setNumber(secretNumber);
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess != secretNumber) {
        if (score > 1) {
            setMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            score--;
            document.querySelector('.score').textContent = 0;
            youLose();
        }
    }
});
