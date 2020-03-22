// Timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 6;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft < 0) {
        clearInterval(timerInterval);
        endGame();
      }
  
    }, 1000);
  }

//   Start Quiz
var startBtnEl = document.querySelector("#startBtn");
var welcMessageEl = document.querySelector("#welcomeMessage");


function startGame() {
    welcMessageEl.style.display = "none";
    setTime();
}

//   End of Game function

  function endGame() {
      timeEl.textContent = "Game Over";
  }

startBtnEl.addEventListener("click", startGame);