containerEl = document.getElementById("container");
ulEl = document.querySelector("ul");
var startButton = document.getElementById("start-button");
h1El = document.querySelector("h1");
h2El = document.querySelector("h2");
timerEl = document.getElementById("timer");
nameEl = document.getElementById("name");
var timerInterval;
var secondsLeft = 75;
var score = 0;
var questions = [];
var i = 0;
a1Button = document.getElementById("a1Button");
a2Button = document.getElementById("a2Button");
a3Button = document.getElementById("a3Button");
a4Button = document.getElementById("a4Button");
submitBtn = document.getElementById("submitBtn");

var q1 = {
  question: "What is the tag used to link a JavaScript file to the HTML file?",
  a1: "<a>",
  a2: "<link>",
  a3: "<script>",
  a4: "<span>",
  ans: "<script>",
};
questions.push(q1);

var q2 = {
  question:
    "Which JavaScript function is used to select a single element with an ID on an HTML page?",
  a1: "document.getElementById()",
  a2: "document.querySelectorAll()",
  a3: "document.querySelector()",
  a4: "document.setAttribute()",
  ans: "document.getElementById()",
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
  a1Button.setAttribute("class", "revealed");
  a2Button.setAttribute("class", "revealed");
  a3Button.setAttribute("class", "revealed");
  a4Button.setAttribute("class", "revealed");
  askQuestions();
});

function askQuestions() {
  if (i < questions.length && secondsLeft > 0) {
    h2El.textContent = questions[i].question;
    a1Button.textContent = questions[i].a1;
    a2Button.textContent = questions[i].a2;
    a3Button.textContent = questions[i].a3;
    a4Button.textContent = questions[i].a4;
    var answer = questions[i].ans;
    ulEl.addEventListener("click", checkAnswer);
    function checkAnswer(event) {
      console.log(event.target.textContent);
      if (event.target.textContent === answer) {
        score += 10;
        i++;
        console.log(score);
      } else {
        secondsLeft = secondsLeft - 10;
        i++;
      }
      askQuestions();
    }
  } else {
    h2El.textContent = "";
    a1Button.remove();
    a2Button.remove();
    a3Button.remove();
    a4Button.remove();
    clearInterval(timerInterval);
    timerEl.setAttribute("style", "display: none");
    // console.log(score);
    // console.log(secondsLeft);
    resultsPage();
  }
}

function resultsPage() {
  score = score + secondsLeft;
  h1El.textContent = "Your Score: " + score;
  h2El.textContent =
    "To save your score, type in your name or initials below and click submit.";
  nameEl.setAttribute("class", "revealed");
  submitBtn.setAttribute("class", "revealed");
  nameEl.placeholder = "Name or Initials";
  submitBtn.addEventListener("click", function () {
    var savedResults = {
      name : nameEl.value,
      score: score,
    }
    localStorage.setItem("savedResults", JSON.stringify(savedResults));
    window.location.href = "./index2.html";
  })
}
