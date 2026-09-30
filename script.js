let userChoice;
let computerChoice;

let userScore = 0;
let computerScore = 0;

let gameOver = false;

const choices = ["Rock", "Paper", "Scissors"];

let gameHistory = [];

const result = document.querySelector("#result");

const userChoiceText = document.querySelector("#user-choice");
const computerChoiceText = document.querySelector("#computer-choice");

const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");

const historyList = document.querySelector("#history-list");


// Game buttons
const gameButtons = document.querySelectorAll("#rock, #paper, #scissors");

gameButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    userChoice = button.textContent.split(" ")[0];

    playGame();

  });

});


// Check winner
function checkWinner() {

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {

    result.textContent = "You win!";
    userScore++;

    userScoreText.textContent = "You: " + userScore;

  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {

    result.textContent = "Computer wins!";
    computerScore++;

    computerScoreText.textContent = "Computer: " + computerScore;

  } else {

    result.textContent = "Draw!";

  }


  // Best of 5
  if (userScore === 3) {

    result.textContent = "You won the game!";
    gameOver = true;

  }

  if (computerScore === 3) {

    result.textContent = "Computer won the game!";
    gameOver = true;

  }


  // History
  gameHistory.push(result.textContent);

  if (gameHistory.length > 5) {
    gameHistory.shift();
  }

  historyList.innerHTML = "";

  for (let i = 0; i < gameHistory.length; i++) {

    const historyItem = document.createElement("li");

    historyItem.textContent = gameHistory[i];

    historyList.appendChild(historyItem);
  }
}


// Play game
function playGame() {

  if (gameOver) {
    return;
  }

  if (!userChoice) {
    result.textContent = "Please choose Rock, Paper, or Scissors.";
    return;
  }

  if (!choices.includes(userChoice)) {
    result.textContent = "Invalid choice.";
    return;
  }

  computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceText.textContent = "You: " + userChoice;

  computerChoiceText.textContent = "Computer: " + computerChoice;

  checkWinner();
}


// Reset
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {

  userChoice = "";
  computerChoice = "";

  userScore = 0;
  computerScore = 0;

  gameOver = false;

  gameHistory = [];

  userChoiceText.textContent = "You: ";
  computerChoiceText.textContent = "Computer: ";

  userScoreText.textContent = "You: 0";
  computerScoreText.textContent = "Computer: 0";

  result.textContent = "";

  historyList.innerHTML = "";
});

