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


function startQuiz() {
    welcMessageEl.style.display = "none";
    setTime();
    quizQuestionFunct();

}

// Quiz question variables

var quizCard = document.querySelector("#quizCard");
var questionNumber = document.querySelector("#quizCardTitle");
var quizQuestion = document.querySelector("#quizCardText");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

// Quiz card function

function quizQuestionFunct() {
    quizCard.style.visibility = "visible";
    questionNumber.textContent = "";
    quizQuestion.textContent = "";
    answer1.textContent = "";
    answer2.textContent = "";
    answer3.textContent = "";
    answer4.textContent = "";

} 

// Quiz array of questions and answers

var questionsAndAnswersArr = []

//   End of Game function

  function endGame() {
      timeEl.textContent = "Game Over";
  }

startBtnEl.addEventListener("click", startQuiz);