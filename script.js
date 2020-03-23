// Quiz array of questions and answers

var qAndAArr = [
  {
      questionNumber: "Question 1",
      question: "Quiz Question Number 1?",
      answers: {
        a: "This is answer 1",
        b: "This is answer 2",
        c: "This is answer 3",
        d: "This is answer 4",
      },
      correctAnswer: "a",
  },
  {
    questionNumber: "Question 2",
    question: "Quiz Question Number 2?",
    answers: {
      a: "This is answer 1",
      b: "This is answer 2",
      c: "This is answer 3",
      d: "This is answer 4",
    },
    correctAnswer: "b",
  },
  {
    questionNumber: "Question 3",
    question: "Quiz Question Number 3?",
    answers: {
      a: "This is answer 1",
      b: "This is answer 2",
      c: "This is answer 3",
      d: "This is answer 4",
    },
    correctAnswer: "c",
  },
  {
    questionNumber: "Question 4",
    question: "Quiz Question Number 4?",
    answers: {
      a: "This is answer 1",
      b: "This is answer 2",
      c: "This is answer 3",
      d: "This is answer 4",
    },
    correctAnswer: "d",
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

// Quiz question variables

var quizCard = document.querySelector("#quizCard");
var questionNumber = document.querySelector("#quizCardTitle");
var quizQuestion = document.querySelector("#quizCardText");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
// var questionBtn = document.querySelectorAll(".questionBtn");
var answer1Btn = document.querySelector("answer1");
var answer2Btn = document.querySelector("answer2");
var answer3Btn = document.querySelector("answer3");
var answer4Btn = document.querySelector("answer4");
var nextQuestionBtnEl = document.querySelector("#nextQuestionBtn")
var currentQuestion = 0;

// Quiz card function

function quizQuestionFunct() {
    quizCard.style.visibility = "visible";
    questionNumber.textContent = qAndAArr[currentQuestion].questionNumber;
    quizQuestion.textContent = qAndAArr[currentQuestion].question;
    answer1.textContent = qAndAArr[currentQuestion].answer1;
    answer2.textContent = qAndAArr[currentQuestion].answer2;
    answer3.textContent = qAndAArr[currentQuestion].answer3;
    answer4.textContent = qAndAArr[currentQuestion].answer4;
    
      // checkAnswer(); 
 
} 

function checkAnswer() {
  console.log("Check answer is working");
  // if statement checking answer
  // correct/wrong statemtn
  // remove time from clock if 
  nextQuestionBtnEl.style.visibility = "visible"
    
}

function nextQuestionFunc() {
  currentQuestion++;
  quizQuestionFunct();
  // Run the next round of quizQuestionFunct
}



//   End of Game function

  function endGame() {
      timeEl.textContent = "Game Over";
  }

// Event listeners

startBtnEl.addEventListener("click", startQuiz);
// questionBtn.addEventListener("click", function(event){
//   event.preventDefault();
//   checkAnswer();
//   }
// );
quizCard.addEventListener("click", function (event){
  if (event.target === answer1Btn || 
    event.target === answer2Btn ||
    event.target === answer3Btn ||
    event.target === answer4Btn) {
    checkAnswer();
  } else {
    return;
  }
});
nextQuestionBtnEl.addEventListener("click", nextQuestionFunc);


