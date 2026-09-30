let userChoice;

let computerChoice;

let choices = ["Rock", "Paper", "Scissors"];

let userScore = 0;

let computerScore = 0;

let gameHistory = [];

const result = document.querySelector("#result");

const userChoiceText = document.querySelector("#user-choice");

const computerChoiceText = document.querySelector("#computer-choice");

const userScoreText = document.querySelector("#user-score");

const computerScoreText = document.querySelector("#computer-score");

const historyList = document.querySelector("#history-list");

const gameButtons = document.querySelectorAll("#rock, #paper, #scissors");

const resetButton = document.querySelector("#reset");


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


gameButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.id === "rock") {
            userChoice = "Rock";
        }

        if (button.id === "paper") {
            userChoice = "Paper";
        }

        if (button.id === "scissors") {
            userChoice = "Scissors";
        }

        playGame();

    });

});


function playGame() {

    computerChoice = choices[Math.floor(Math.random() * 3)];

    userChoiceText.textContent =
        "شما: " + translateChoice(userChoice);

    computerChoiceText.textContent =
        "کامپیوتر: " + translateChoice(computerChoice);


    if (userChoice === computerChoice) {

        result.textContent = "مساوی! 🤝";

    }

    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")
    ) {

        userScore++;

        result.textContent = "شما برنده شدید! 🎉";

    }

    else {

        computerScore++;

        result.textContent = "کامپیوتر برنده شد! 🤖";

    }


    userScoreText.textContent =
        "امتیاز شما: " + userScore;

    computerScoreText.textContent =
        "امتیاز کامپیوتر: " + computerScore;


    addToHistory();

}


function addToHistory() {

    let historyItem = document.createElement("li");

    historyItem.textContent =
        "شما: " + translateChoice(userChoice) +
        " | کامپیوتر: " + translateChoice(computerChoice) +
        " | " + result.textContent;


    historyList.appendChild(historyItem);

    gameHistory.push(historyItem);

    if (gameHistory.length > 5) {

        let oldItem = gameHistory.shift();

        oldItem.remove();

    }

}


resetButton.addEventListener("click", function() {

    userScore = 0;

    computerScore = 0;

    userChoice = undefined;

    computerChoice = undefined;

    gameHistory = [];

    userChoiceText.textContent = "شما: -";

    computerChoiceText.textContent = "کامپیوتر: -";

    userScoreText.textContent = "امتیاز شما: 0";

    computerScoreText.textContent = "امتیاز کامپیوتر: 0";

    result.textContent = "";

    historyList.innerHTML = "";

});
