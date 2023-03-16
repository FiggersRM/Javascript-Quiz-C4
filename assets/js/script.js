var startButton = document.getElementById("start-button");
h1El = document.querySelector("h1");
h2El = document.querySelector("h2");
timerEl = document.getElementById("timer");
var timerInterval;
var secondsLeft = 75;
a1Button = document.getElementById("a1Button");
a2Button = document.getElementById("a2Button");
a3Button = document.getElementById("a3Button");
a4Button = document.getElementById("a4Button");
var q1 = {
  question: "What is the tag used to link a JavaScript file to the HTML file?",
  a1: "<a>",
  a2: "<link>",
  a3: "<source>",
  a4: "<span>",
  answer: "<source>",
};
var questions = [q1];

startButton.addEventListener("click", function () {
  h1El.textContent = "";
  h2El.textContent = "";
  startButton.remove();
  timerEl.textContent = "Remaining time: 75";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Remaining time: " + secondsLeft;
  }, 1000);
  askQuestions();
});

function askQuestions() {
  for (var i = 0; i < questions.length; i++) {
    h2El.textContent = questions[i].question;
  }
}
