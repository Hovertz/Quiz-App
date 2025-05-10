//import { questions } from "/data.js";
//console.log(questions);
let questions = [
  {
    question: "Which team won the Champions League in the season 2023/2024?",
    choice1: "Atalanta",
    choice2: "Bayer Leverkusen",
    choice3: "Borussia Dortmund",
    choice4: "Real Madrid",
    answer: 4,
  },
  {
    question: "Which team has won the most World Cups?",
    choice1: "Argentina",
    choice2: "Brazil",
    choice3: "France",
    choice4: "Spain",
    answer: 2,
  },
  {
    question: "When did the World Cup start?",
    choice1: "1928",
    choice2: "1929",
    choice3: "1930",
    choice4: "1931",
    answer: 3,
  },
  {
    question: "What is the only Swedish club that won the Champions League?",
    choice1: "Goteborg",
    choice2: "Linkoping",
    choice3: "Malmo",
    choice4: "Stockholm",
    answer: 1,
  },
  {
    question: "Where is Mehdi Taremi from?",
    choice1: "Iran",
    choice2: "Morocco",
    choice3: "Qatar",
    choice4: "Saudi Arabia",
    answer: 1,
  },
  {
    question:
      "Which player was a legend at Barcelona, then moved to PSG and lastly to Inter Miami?",
    choice1: "Busquets",
    choice2: "Neymar",
    choice3: "Alba",
    choice4: "Messi",
    answer: 4,
  },
  {
    question: "How many Ballon d'Ors does Ronaldo have?",
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: 2,
  },
  {
    question: "Which anime is about Football?",
    choice1: "Bleach",
    choice2: "Solo Levelling",
    choice3: "Blue Lock",
    choice4: "Haikyuu",
    answer: 3,
  },
  {
    question: "Who is the only goalkeeper that has won the Ballon D'Or?",
    choice1: "Donnarumma",
    choice2: "Yashin",
    choice3: "Cech",
    choice4: "Buffon",
    answer: 2,
  },
  {
    question: "Which club went unbeaten in 2023/2024 in the Bundesliga?",
    choice1: "Stuttgart",
    choice2: "Bayern Munchen",
    choice3: "Borussia Dortmund",
    choice4: "Bayer Leverkusen",
    answer: 4,
  },
  {
    question:
      "Which 2 teams were in the Champions League final in the 2024/2025 season?",
    choice1: "PSG and Barcelona ",
    choice2: "Bayern Munchen and PSG",
    choice3: "Inter Milan and Barcelona",
    choice4: "PSG and Inter Milan",
    answer: 4,
  },
];

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  let bgMusic = document.getElementById("bg-music");
  bgMusic.volume = 0.2;
  bgMusic.play();

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
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

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
    let audio = document.getElementById("select");
    audio.play();

    if (!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
