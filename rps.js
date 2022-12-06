// caching the DOM
const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

// Adding event listeners for user input
rock.addEventListener("click", function () {
  console.log("you clicked on rock");
});

paper.addEventListener("click", function () {
  console.log("you clicked on paper");
});

scissors.addEventListener("click", function () {
  console.log("you clicked on scissors");
});
