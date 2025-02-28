'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const scores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const player = document.querySelectorAll('.player');
let currentPlayer = 0;
let playing = true;

const rollDice = function () {
  if (playing) {
    //Roll dice = update dice value
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    //display correct dice image
    diceImg.src = `dice-${diceRoll}.png`;
    //if dice roll is greater than 1 add to current points else chnage player and remove all current points
    if (diceRoll > 1) {
      currentScores[currentPlayer].textContent =
        Number(currentScores[currentPlayer].textContent) + diceRoll;
    } else {
      currentScores[currentPlayer].textContent = 0;
      switchPlayer();
    }
  }
};

//Switch  Player
const switchPlayer = function () {
  player[currentPlayer].classList.remove('player--active');
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  player[currentPlayer].classList.add('player--active');
};

//Reset for new game
const newGame = function () {
  currentPlayer = 0;
  playing = true;

  player[0].classList.add('player--active');
  player[1].classList.remove('player--active');
  player.forEach((item, i) => {
    if (player[i].classList.contains('player-winner')) {
      player[i].classList.remove('player--winner');
    }
  });

  scores.forEach((score, i) => {
    scores[i].textContent = 0;
  });
  currentScores.forEach((score, i) => {
    currentScores[i].textContent = 0;
  });
};

//Hold points = update player score check to see if player wins
const hold = function () {
  if (playing) {
    scores[currentPlayer].textContent =
      Number(scores[currentPlayer].textContent) +
      Number(currentScores[currentPlayer].textContent);
    currentScores[currentPlayer].textContent = 0;

    if (Number(scores[currentPlayer].textContent) < 100) {
      switchPlayer();
    } else {
      player[currentPlayer].classList.add('player--winner');
      alert(`Player ${currentPlayer === 0 ? 1 : 2} wins!`);
      playing = false;
    }
  }
};

//create event listeners
btnRoll.addEventListener('click', function (e) {
  rollDice();
});
btnNew.addEventListener('click', function (e) {
  newGame();
});
btnHold.addEventListener('click', function (e) {
  hold();
});

//start new game
newGame();
