let userChoice;
let computerChoice;

let userScore = 0;
let computerScore = 0;

let gameOver = false;

let choices = ["Rock", "Paper", "Scissors"];

let gameHistory = [];

const result = document.querySelector("#result");

const userChoiceText = document.querySelector("#user-choice");
const computerChoiceText = document.querySelector("#computer-choice");

const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");

const historyList = document.querySelector("#history-list");


const gameButtons = document.querySelectorAll("#rock, #paper, #scissors");

gameButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    if (button.id === "rock") {
      userChoice = "Rock";
    }

    else if (button.id === "paper") {
      userChoice = "Paper";
    }

    else if (button.id === "scissors") {
      userChoice = "Scissors";
    }

    playGame();

  });

});


// بررسی برنده
function checkWinner() {

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {

    result.textContent = "شما برنده شدید!";
    userScore++;

    userScoreText.textContent = "شما: " + userScore;

  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {

    result.textContent = "کامپیوتر برنده شد!";
    computerScore++;

    computerScoreText.textContent = "کامپیوتر: " + computerScore;

  } else {

    result.textContent = "مساوی!";

  }


  // بهترین از 5
  if (userScore === 3) {

    result.textContent = "شما برنده بازی شدید! 🎉";
    gameOver = true;

  }

  if (computerScore === 3) {

    result.textContent = "کامپیوتر برنده بازی شد! 🤖";
    gameOver = true;

  }


  // تاریخچه
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


// اجرای بازی
function playGame() {

  if (gameOver) {
    return;
  }

  if (!userChoice) {
    result.textContent = "لطفاً سنگ، کاغذ یا قیچی را انتخاب کنید.";
    return;
  }

  if (!choices.includes(userChoice)) {
    result.textContent = "انتخاب نامعتبر است.";
    return;
  }

  computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceText.textContent = "شما: " + translateChoice(userChoice);

  computerChoiceText.textContent = "کامپیوتر: " + translateChoice(computerChoice);

  checkWinner();
}


// تبدیل انتخاب انگلیسی به فارسی
function translateChoice(choice) {

  if (choice === "Rock") {
    return "سنگ";
  }

  if (choice === "Paper") {
    return "کاغذ";
  }

  if (choice === "Scissors") {
    return "قیچی";
  }

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

  userChoiceText.textContent = "شما: ";
  computerChoiceText.textContent = "کامپیوتر: ";

  userScoreText.textContent = "شما: 0";
  computerScoreText.textContent = "کامپیوتر: 0";

  result.textContent = "";

  historyList.innerHTML = "";
});

