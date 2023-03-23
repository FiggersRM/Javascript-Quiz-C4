scoresEl = document.getElementById('scores');
listEl = document.getElementById('list')
goBackBtn = document.getElementById("goBackBtn");
clearBtn = document.getElementById("clearBtn");
results = JSON.parse(localStorage.getItem("savedResults")) || [];

for (var i = 0; i < results.length; i++) {
  console.log(results[i]);
  console.log(results[i].name);
  var scoreEl = document.createElement('li');
  scoreEl.textContent = results[i].name + " " + results[i].score;
  listEl.appendChild(scoreEl);
}

goBackBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
});
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
