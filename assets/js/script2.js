nameEl = document.getElementById("name");
scoreEl = document.getElementById("score");
goBackBtn = document.getElementById("goBackBtn");
clearBtn = document.getElementById("clearBtn");
lastScore = JSON.parse(localStorage.getItem("savedResults"));

nameEl.textContent = lastScore.name;
scoreEl.textContent = lastScore.score;

goBackBtn.addEventListener("click", function () {
    window.location.href = "./index.html";
})
clearBtn.addEventListener("click", function () {
    localStorage.clear();
})
