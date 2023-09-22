'use strict';

// MODAL ELEMENTS

const modal = document.querySelector('.modal');

//const username = document.querySelector('.username').value;

const closeModalX = document.querySelector('.close-modal');

const btnCloseModal = document.querySelector('.btn-close-modal');

const overlay = document.querySelector('.overlay');

//GAME ELEMENTS

const btnAgain = document.querySelector('.again');

//const player = document.querySelector('.player').value;

const secretNumber = Math.trunc(Math.random() * 44) + 1;

//const guess = document.querySelector('.guess').value;

const checkBtn = document.querySelector('.check');

const message = document.querySelector('.message');

//const score = document.querySelector('.score');
let scoreCounter = 20;

let highscore = 0;

const currentBest = document.querySelector('.best');

///////////////////////////FUNCTIONS//////////////////////////////

const hidden = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const playerUserName = () => {
  let player = document.querySelector('.player');
  let username = document.querySelector('.username').value;

  player.textContent = username;

  //   if (document.querySelector('.username').textContent === '') {
  //     document.querySelector('.player').textContent = 'GUEST';
  //   }

  if (!username) {
    player.textContent = 'GUEST';
  }
};

const displayMsg = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumberText = number => {
  document.querySelector('.secret-number').textContent = number;
};

const bodyColor = color => {
  document.querySelector('body').style.background = color;
};

const secretNumColor = color => {
  document.querySelector('.secret-number').style.background = color;
};

const displayScoreText = number => {
  document.querySelector('.score').textContent = number;
};

const playAgain = () => {
  displayMsg('Guess baby GUESS again');

  scoreCounter = 20;

  displayScoreText(scoreCounter);

  bodyColor('#eaafc8');

  secretNumColor('#654ea3');

  displayNumberText('?');

  document.querySelector('.guess').value = '';
};
/////////////////////////ACUTAL CODE//////////////////////////////

btnCloseModal.addEventListener('click', function () {
  hidden();
  playerUserName();
});

closeModalX.addEventListener('click', function () {
  hidden();
  playerUserName();
});

overlay.addEventListener('click', hidden);

/////////////CHECK BUTTON EVENTS//////////////////////////

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    displayMsg('Might wanna guess first');
  } else if (guess > secretNumber) {
    displayMsg(`Too high`);
    scoreCounter--;
    displayScoreText(scoreCounter);
  } else if (guess < secretNumber) {
    displayMsg(`Too low`);
    scoreCounter--;
    displayScoreText(scoreCounter);
  } else if (guess === secretNumber) {
    displayMsg(`Correct`);
    displayNumberText(secretNumber);
    bodyColor('#60b347');
    secretNumColor('#ed4264');

    if (scoreCounter > highscore) {
      highscore = scoreCounter;
    }

    document.querySelector('.highscore').textContent = highscore;
  } else if (scoreCounter === 0 || scoreCounter < 0) {
    score.textContent = 0;
    displayMsg(`Ya lost the game`);
  }
});

//////////////////////AGAIN BUTTON EVENTS///////////////////////////

btnAgain.addEventListener('click', playAgain);

////////////////////////KEYBOARD EVENTS////////////////////////////

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hidden();
    playerUserName();
  }
});

// const html = ` <section class="right">
// <p class="message">Guess Baby GUESS</p>
// <p class="label-score">Score: <span class="score">${40}</span></p>
// <p class="label-highscore">
//   Highscore: <span class="highscore">${4}</span>
// </p>
// <p class="label-best">
//   Current best is: <span class="best">${'ZOKA'}</span>
// </p>
// </section>`;

// document.querySelector('.right').insertAdjacentHTML('beforeend', html);
