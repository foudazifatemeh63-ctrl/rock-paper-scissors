let userChoice;

let computerChoice;

let choices = ["Rock", "Paper", "Scissors"];

let userScore = 0;

let computerScore = 0;

let gameHistory = [];

let gameOver = false;


const result = document.querySelector("#result");

const userChoiceText = document.querySelector("#user-choice");

const computerChoiceText = document.querySelector("#computer-choice");

const userScoreText = document.querySelector("#user-score");

const computerScoreText = document.querySelector("#computer-score");

const historyList = document.querySelector("#history-list");

const gameButtons = document.querySelectorAll("#rock, #paper, #scissors");

const resetButton = document.querySelector("#reset");


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


// Validation
function isValidChoice(choice) {

    return choices.includes(choice);

}


// دکمه‌های بازی
gameButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // اگر بازی تمام شده باشد، بازی نکن
        if (gameOver) {
            return;
        }


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


// اجرای بازی
function playGame() {

    // Validation
    if (!isValidChoice(userChoice)) {

        result.textContent = "انتخاب نامعتبر است.";

        return;
    }


    // انتخاب تصادفی کامپیوتر
    computerChoice =
        choices[Math.floor(Math.random() * choices.length)];


    // نمایش انتخاب‌ها
    userChoiceText.textContent =
        "شما: " + translateChoice(userChoice);

    computerChoiceText.textContent =
        "کامپیوتر: " + translateChoice(computerChoice);


    // بررسی نتیجه
    if (userChoice === computerChoice) {

        result.textContent = "مساوی! 🤝";

    }

    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")
    ) {

        userScore++;

        result.textContent = "شما برنده این دور شدید! 🎉";

    }

    else {

        computerScore++;

        result.textContent = "کامپیوتر برنده این دور شد! 🤖";

    }


    // نمایش امتیاز
    userScoreText.textContent =
        "امتیاز شما: " + userScore;

    computerScoreText.textContent =
        "امتیاز کامپیوتر: " + computerScore;


    // اضافه کردن به تاریخچه
    addToHistory();


    // بررسی برنده نهایی
    checkWinner();

}


// بررسی اینکه چه کسی به 3 برد رسیده
function checkWinner() {

    if (userScore === 3) {

        result.textContent =
            "🎉 شما برنده بازی شدید!";

        gameOver = true;

        return;
    }


    if (computerScore === 3) {

        result.textContent =
            "🤖 کامپیوتر برنده بازی شد!";

        gameOver = true;

        return;
    }

}


// تاریخچه بازی
function addToHistory() {

    let historyItem = document.createElement("li");


    historyItem.textContent =
        "شما: " + translateChoice(userChoice) +
        " | کامپیوتر: " + translateChoice(computerChoice) +
        " | " + result.textContent;


    historyList.appendChild(historyItem);

    gameHistory.push(historyItem);


    // فقط 5 بازی آخر نمایش داده شود
    if (gameHistory.length > 5) {

        let oldItem = gameHistory.shift();

        oldItem.remove();

    }

}


// دکمه شروع دوباره
resetButton.addEventListener("click", function() {

    userScore = 0;

    computerScore = 0;

    userChoice = undefined;

    computerChoice = undefined;

    gameHistory = [];

    gameOver = false;


    userChoiceText.textContent = "شما: -";

    computerChoiceText.textContent = "کامپیوتر: -";

    userScoreText.textContent = "امتیاز شما: 0";

    computerScoreText.textContent = "امتیاز کامپیوتر: 0";

    result.textContent = "";

    historyList.innerHTML = "";

});
