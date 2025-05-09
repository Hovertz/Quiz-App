const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Text 1",
    choice1: "one1",
    choice2: "two1",
    choice3: "three1",
    choice4: "four1",
    answer: 1,
  },
  {
    question: "Text 2",
    choice1: "one2",
    choice2: "two2",
    choice3: "three2",
    choice4: "four2",
    answer: 1,
  },
  {
    question: "Text 3",
    choice1: "one3",
    choice2: "two3",
    choice3: "three3",
    choice4: "four3",
    answer: 1,
  },
];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startGame();
