// Quiz array of questions and answers

var qAndAArr = [
  {
      questionNumber: "Question #1",
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
    questionNumber: "Question #2",
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
    questionNumber: "Question #3",
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
    questionNumber: "Question #4",
    question: "JSON is a format for storing and transporting data, often from a server to a web page. What does JSON stand for?",
    answers: {
      a: "Java Object Number",
      b: "JavaScript Oriented Notes",
      c: "Java Orientation Notation",
      d: "JavaScript Object Notation",
    },
    correctAnswer: "answer4",
  },
  {
    questionNumber: "Question #5",
    question: "If you put JavaScript inside your HTML, what tag do you put around the code?",
    answers: {
      a: "<style>",
      b: "<scripting>",
      c: "<javascript>",
      d: "<script>",
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
      if(secondsLeft < 0 || currentQuestion === qAndAArr.length) {
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
var answerMessage = document.querySelector("#answerMessage");
var nextQuestionBtnEl = document.querySelector("#nextQuestionBtn");
var currentQuestion = 0;

// Quiz card function

function quizQuestionFunct() {
  if (currentQuestion === qAndAArr.length){
    return;
  } else {
    nextQuestionBtnEl.style.visibility = "hidden"; 
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false; 
    quizCard.style.visibility = "visible";
    answerMessage.textContent = "";
    questionNumber.textContent = qAndAArr[currentQuestion].questionNumber;
    quizQuestion.textContent = qAndAArr[currentQuestion].question;
    answer1.textContent = qAndAArr[currentQuestion].answers.a;
    answer2.textContent = qAndAArr[currentQuestion].answers.b;
    answer3.textContent = qAndAArr[currentQuestion].answers.c;
    answer4.textContent = qAndAArr[currentQuestion].answers.d;
  } 
}

// Check answer function

function checkAnswer() {
  if (event.target.id === qAndAArr[currentQuestion].correctAnswer) {
    answerMessage.textContent = "Correct Answer!"
  } else {
    // document.getElementById(event.target.id).style.background = "red";
    answerMessage.textContent = "Wrong Answer!"
    secondsLeft -= 10;
  }
  // document.getElementById(qAndAArr[currentQuestion].correctAnswer).style.background = "green";
  document.getElementById("answer1").disabled = true;
  document.getElementById("answer2").disabled = true;
  document.getElementById("answer3").disabled = true;
  document.getElementById("answer4").disabled = true;
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
      quizCard.style.display = "none";
      highScoreForm();
  }

// High Score Modal window

var highScoreEl = document.getElementById("highScore");

function highScoreForm() {
  highScoreEl.style.display = "block";
  console.log("High score form is working");
  
}

// Event listeners

startBtnEl.addEventListener("click", startQuiz);
nextQuestionBtnEl.addEventListener("click", nextQuestionFunc);
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
