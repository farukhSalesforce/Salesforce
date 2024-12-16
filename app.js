let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let submitButton = document.getElementById("submit");
let userInput = document.getElementById("guessField");
let prevGuess = document.querySelector(".guesses");
let remainGuess = document.querySelector(".lastResult");
let msg = document.getElementById("msg");

let guessPrev = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateValue(guess);
  });
}

function validateValue(guess) {
  if (isNaN(guess)) {
    alert("Please Enter Number!!!");
    console.log("Please Enter a number");
  } else if (guess > 100 || guess <= 0) {
    console.log("please choose between 1 to 100");
    alert("please choose between 1 to 100!!!");
  } else {
    guessPrev.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayRemaining(`Game Over, Random Number was: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  let i = 1;
  if (guess > randomNumber) {
    displayRemaining(" Your Guess is higher");
    msg.style.color = "red";
    msg.style.fontWeight = "bold";
  } else if (guess < randomNumber) {
    displayRemaining(" Your Guess is Lower.");
    msg.style.color = "red";
    msg.style.fontWeight = "bold";
  } else {
    displayRemaining(" Congratulations, you got the right Number.");
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess}, `;
  prevGuess.style.color = "purple";
  numGuess++;
  remainGuess.innerHTML = `${11 - numGuess}`;
}

function displayRemaining(message) {
  msg.innerHTML = `${message}`;
}

function endGame() {}

function newGame() {}
