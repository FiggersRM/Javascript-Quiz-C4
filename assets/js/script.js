containerEl = document.getElementById("container");
var startButton = document.getElementById("start-button");
h1El = document.querySelector("h1");
h2El = document.querySelector("h2");
timerEl = document.getElementById("timer");
var timerInterval;
var secondsLeft = 75;
var score = 0;
var questions = [];
a1Button = document.getElementById("a1Button");
a2Button = document.getElementById("a2Button");
a3Button = document.getElementById("a3Button");
a4Button = document.getElementById("a4Button");

var q1 = {
  question: "What is the tag used to link a JavaScript file to the HTML file?",
  a1: "<a>",
  a2: "<link>",
  a3: "<script>",
  a4: "<span>",
  ans: "<script>"
};
questions.push(q1);

var q2 = {
  question: "Which JavaScript function is used to select a single element with an ID on an HTML page?",
  a1: "document.getElementById()",
  a2: "document.querySelectorAll()",
  a3: "document.querySelector()",
  a4: "document.setAttribute()",
  ans: "document.getElementById()"
};
questions.push(q2);

startButton.addEventListener("click", function () {
  h1El.textContent = "";
  h2El.textContent = "";
  startButton.remove();
  timerEl.textContent = "Remaining time: 75";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Remaining time: " + secondsLeft;
  }, 1000);
  a1Button.setAttribute("class", "revealedBtn");
  a2Button.setAttribute("class", "revealedBtn");
  a3Button.setAttribute("class", "revealedBtn");
  a4Button.setAttribute("class", "revealedBtn");
  askQuestions();
});

function askQuestions() {
  for (var i = 0; i < questions.length; i++) {
    h2El.textContent = questions[i].question;
    a1Button.textContent = questions[i].a1;
    a2Button.textContent = questions[i].a2;
    a3Button.textContent = questions[i].a3;
    a4Button.textContent = questions[i].a4;
    var answer = questions[i].ans;
    function checkAnswer(event) {
      console.log(event.target.textContent);
      if (event.target.textContent === answer) {
        score += 10;
        console.log(score);
        return;
      }
      else {
        secondsLeft -= 10;
        return;
      }
    }
    containerEl.addEventListener("click", checkAnswer);
  }
}
