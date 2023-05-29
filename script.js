'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '34';
// document.querySelector('.score').textContent = '4';

// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess); //whenever we get some input form user interface it is always an string.
  //When there is no input
  if (!guess) {
    if (score > 1) {
      displayMessage('No number!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //when player wins the game
  else if (guess == secretNumber) {
    if (score > 1) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost the game';
    }
  }
  //   } else if (guess !== secretNumber) {
  //     if (score > 1) {
  //       displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else {
  //     displayMessage('You have lost the game');
  //   }
  // }
  //when guess is wrong
  // else if (guess !== secretNumber) {
  //   if (score > 1) {
  //     displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage = 'You have lost the game';
  //   }
  // }
  // //when number is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess is too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You have lost the game';
  //   }
  // }
  // //when number is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess is too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You have lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
