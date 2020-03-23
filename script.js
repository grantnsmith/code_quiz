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

  // Quiz array of questions and answers

var qAndAArr = [
  {
      questionNumber: "Question 1",
      question: "Quiz Question Number 1?",
      answer1: "This is answer 1",
      answer2: "This is answer 2",
      answer3: "This is answer 3",
      answer4: "This is answer 4",
      correct: "1"
  },
  {
      questionNumber: "Question 2",
      question: "Quiz Question Number 2?",
      answer1: "This is answer 1",
      answer2: "This is answer 2",
      answer3: "This is answer 3",
      answer4: "This is answer 4",
      correct: "3"
  }
]

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
var questionBtn = document.querySelector(".questionBtn");
var nextQuestionBtnEl = docuemnt.querySelector("#nextQuestionBtn")
var currentQuestion = 0;

// Quiz card function

function quizQuestionFunct() {
    quizCard.style.visibility = "visible";
    questionNumber.textContent = qAndAArr[0].questionNumber;
    quizQuestion.textContent = qAndAArr[0].question;
    answer1.textContent = qAndAArr[0].answer1;
    answer2.textContent = qAndAArr[0].answer2;
    answer3.textContent = qAndAArr[0].answer3;
    answer4.textContent = qAndAArr[0].answer4;
    currentQuestion++;
    
      // checkAnswer(); 
 
} 

function checkAnswer() {
  // if statement checking answer
  // correct/wrong statemtn
  // remove time from clock if 
    
}





//   End of Game function

  function endGame() {
      timeEl.textContent = "Game Over";
  }

startBtnEl.addEventListener("click", startQuiz);
questionBtn.addEventListener("click", checkAnswer);


