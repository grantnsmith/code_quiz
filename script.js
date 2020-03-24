// Quiz array of questions and answers

var qAndAArr = [
  {
      questionNumber: "Question Number 1",
      question: "What do [ ] denote in Javascript?",
      answers: {
        a: "An Array",
        b: "An Object",
        c: "A variable",
        d: "A function",
      },
      correctAnswer: "answer1",
  },
  {
    questionNumber: "Question Number 2",
    question: "What does DOM stand for?",
    answers: {
      a: "Database Oriented Manager",
      b: "Document Object Model",
      c: "Data Objective Model",
      d: "Debugging Oriented Mode",
    },
    correctAnswer: "answer2",
  },
  {
    questionNumber: "Question Number 3",
    question: "What type of value is surround by quotation marks (e.g. 'value')?",
    answers: {
      a: "A boolean",
      b: "A number",
      c: "A string",
      d: "A variable",
    },
    correctAnswer: "answer3",
  },
  {
    questionNumber: "Question Number 4",
    question: "JSON is a format for storing and transporting data, often from a server to a web page. What does JSON stand for?",
    answers: {
      a: "Java Object Number",
      b: "JavaScript Oriented Notes",
      c: "Java Orientation Notation",
      d: "JavaScript Object Notation",
    },
    correctAnswer: "answer4",
  }
]

//   Start Quiz Variables and Function
var startBtnEl = document.querySelector("#startBtn");
var welcMessageEl = document.querySelector("#welcomeMessage");


function startQuiz() {
    welcMessageEl.style.display = "none";
    setTime();
    quizQuestionFunct();

}

// Timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 76;

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
var answerMessage = document.querySelector("#answerMessage");
var nextQuestionBtnEl = document.querySelector("#nextQuestionBtn");
var currentQuestion = 0;

// Quiz card function

function quizQuestionFunct() {
    quizCard.style.visibility = "visible";
    answerMessage.textContent = "";
    questionNumber.textContent = qAndAArr[currentQuestion].questionNumber;
    quizQuestion.textContent = qAndAArr[currentQuestion].question;
    answer1.textContent = qAndAArr[currentQuestion].answers.a;
    answer2.textContent = qAndAArr[currentQuestion].answers.b;
    answer3.textContent = qAndAArr[currentQuestion].answers.c;
    answer4.textContent = qAndAArr[currentQuestion].answers.d;
 
} 

// Check answer function

function checkAnswer() {
  if (event.target.id === qAndAArr[currentQuestion].correctAnswer) {
    answerMessage.textContent = "Correct Answer!"
  } else {
    answerMessage.textContent = "Wrong Answer!"
  }

  nextQuestionBtnEl.style.visibility = "visible";
    
}
// Next question function

function nextQuestionFunc() {
  currentQuestion++;
    quizQuestionFunct();

}

//   End of Game function

  function endGame() {
      timeEl.textContent = "Game Over";
  }

// Event listeners

startBtnEl.addEventListener("click", startQuiz);

quizCard.addEventListener("click", function(event){
  if (event.target.id === "answer1" ||
      event.target.id === "answer2" ||
      event.target.id === "answer3" ||
      event.target.id === "answer4") {
        checkAnswer();
  } else {
    return;
  }
});

nextQuestionBtnEl.addEventListener("click", nextQuestionFunc);