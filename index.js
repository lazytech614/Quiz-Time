const questionList = [
  {
    question: "HTML is considered as ______ ?",
    answer: [
      { text: "Programming language", isCorrect: false },
      { text: "OOP language", isCorrect: false },
      { text: "High level language", isCorrect: false },
      { text: "Markup language", isCorrect: true },
    ],
  },
  {
    question:
      "If we want to set the style for just one element, which css selector will we use?",
    answer: [
      { text: "id", isCorrect: true },
      { text: "class", isCorrect: false },
      { text: "tag", isCorrect: false },
      { text: "name", isCorrect: false },
    ],
  },
  {
    question: "What is the Full Form of the SPX?",
    answer: [
      { text: " Sequenced Packet Exchange", isCorrect: true },
      { text: "Sequence Packet Exchange", isCorrect: false },
      { text: "Sequenced Packets Exchange", isCorrect: false },
      { text: " None of the above", isCorrect: false },
    ],
  },
  {
    question: " The Full form Of the MIME is:",
    answer: [
      { text: " Multiple Internet Mail Extensions", isCorrect: false },
      { text: "Multipurpose Internet Mail Extensions", isCorrect: true },
      { text: "Multiple Internet Mails Extensions", isCorrect: false },
      { text: "None of the above", isCorrect: false },
    ],
  },
  {
    question: "URL is an acronym for",
    answer: [
      { text: "Universal research locator", isCorrect: false },
      { text: "Universal resource locator", isCorrect: false },
      { text: " Uniform research locator", isCorrect: false },
      { text: "Uniform resource locator", isCorrect: true },
    ],
  },
  {
    question: "Which of the following is true?",
    answer: [
      { text: "BR tag is used to have a blank line", isCorrect: true },
      {
        text: "In tables, header cells are centered by default and the data cells are right-aligned",
        isCorrect: false,
      },
      { text: "The <TR> is used to create a data cell", isCorrect: false },
      { text: "INPUT tag must have at least 4 attributes", isCorrect: false },
    ],
  },
  {
    question: "Which of the following tag is used to embed css in html page?",
    answer: [
      { text: "<css></css>", isCorrect: false },
      { text: "<style/>", isCorrect: true },
      { text: "<script></script>", isCorrect: false },
      { text: "<!DOCTYPE html/>", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following CSS framework is used to create a responsive design?",
    answer: [
      { text: "django", isCorrect: false },
      { text: "rails", isCorrect: false },
      { text: "larawell", isCorrect: false },
      { text: "bootstrap", isCorrect: true },
    ],
  },
  {
    question:
      " Which of the following CSS style property is used to specify an italic text?",
    answer: [
      { text: "style", isCorrect: false },
      { text: "font", isCorrect: false },
      { text: "font-style", isCorrect: true },
      { text: "text-decoration", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following are the CSS Extension Prefixes for Webkit?",
    answer: [
      { text: "-chrome", isCorrect: false },
      { text: "-web", isCorrect: false },
      { text: "-o-", isCorrect: false },
      { text: "-webkit", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    answer: [
      { text: "To structure web pages", isCorrect: false },
      { text: "To style web pages", isCorrect: false },
      {
        text: "To add interactivity and dynamic content to web pages",
        isCorrect: true,
      },
      { text: "To store data on the server", isCorrect: false },
    ],
  },
  {
    question:
      "Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
    answer: [
      { text: "const", isCorrect: false },
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: true },
      { text: "both B and C", isCorrect: false },
    ],
  },
  {
    question: "What does the undefined value in JavaScript represent?",
    answer: [
      { text: "An unassigned variable", isCorrect: true },
      { text: "A null value", isCorrect: false },
      { text: "A logical false", isCorrect: false },
      { text: "An error condition", isCorrect: false },
    ],
  },
  {
    question: `What will be the output of the following code?
    console.log(typeof null);`,
    answer: [
      { text: "'object'", isCorrect: true },
      { text: "'null'", isCorrect: false },
      { text: "'undefined'", isCorrect: false },
      { text: "'number'", isCorrect: false },
    ],
  },
  {
    question:
      "Which operator is used to check both the value and the type of a variable in JavaScript?",
    answer: [
      { text: "==", isCorrect: false },
      { text: "!=", isCorrect: false },
      { text: "!==", isCorrect: false },
      { text: "===", isCorrect: true },
    ],
  },
  {
    question: `What is the output of the following code snippet?
let x = 'Hello';
let y = 'World';
console.log(x + ' ' + y);`,
    answer: [
      { text: "HelloWorld", isCorrect: false },
      { text: "'Hello World'", isCorrect: true },
      { text: "'Hello' 'World'", isCorrect: false },
      { text: "Hello World", isCorrect: false },
    ],
  },
  {
    question:
      "In a switch statement, what keyword is used to terminate a case in JavaScript?",
    answer: [
      { text: "end", isCorrect: false },
      { text: "break", isCorrect: true },
      { text: "stop", isCorrect: false },
      { text: "exit", isCorrect: false },
    ],
  },
  {
    question: `Consider the following code:
let x = 5;
let result = (x > 3) ? 'Yes' : 'No';
console.log(result);
What is the output?`,
    answer: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: false },
      { text: "'Yes", isCorrect: true },
      { text: "No", isCorrect: false },
    ],
  },
  {
    question: "In JavaScript, what is a callback function?",
    answer: [
      { text: "A function that runs after the page loads", isCorrect: false },
      {
        text: "A function passed as an argument to another function",
        isCorrect: true,
      },
      { text: "A function that calls itself", isCorrect: false },
      { text: "A function that performs an HTTP request", isCorrect: false },
    ],
  },
  {
    question: `What does the following function return?
function checkEven(number) {
return number % 2 === 0;
}
console.log(checkEven(3));`,
    answer: [
      { text: "true", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "false", isCorrect: true },
    ],
  },
  {
    question: "What is currying in JavaScript?",
    answer: [
      {
        text: "The process of breaking down a function into a series of functions that each take a single argument",
        isCorrect: true,
      },
      { text: "Transforming a function to manage its state", isCorrect: false },
      { text: "A way of writing asynchronous code", isCorrect: false },
      { text: "A way of writing asynchronous code", isCorrect: false },
    ],
  },
  {
    question: "What is an arrow function in ES6?",
    answer: [
      {
        text: "A function that points to another function",
        isCorrect: false,
      },
      {
        text: "A shorter syntax for writing function expressions",
        isCorrect: true,
      },
      { text: "A function used for one-way data binding", isCorrect: false },
      {
        text: "A special function for asynchronous programming",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How does the spread operator (...) work in ES6?",
    answer: [
      {
        text: "It divides an array into individual elements",
        isCorrect: false,
      },
      {
        text: "It merges arrays or object properties",
        isCorrect: true,
      },
      { text: "It spreads an object into multiple arrays", isCorrect: false },
      {
        text: "It is used for error handling",
        isCorrect: false,
      },
    ],
  },
  {
    question: `What does the following ES6 code output?
let [a, b] = [1, 2];
console.log(a);`,
    answer: [
      {
        text: "1",
        isCorrect: true,
      },
      {
        text: "2",
        isCorrect: false,
      },
      { text: "[1,2]", isCorrect: false },
      {
        text: "undefined",
        isCorrect: false,
      },
    ],
  },
  {
    question: `Consider the following ES6 code:
const square = x => x * x; console.log(square(4));
What is the output?`,
    answer: [
      {
        text: "8",
        isCorrect: false,
      },
      {
        text: "syntax error",
        isCorrect: false,
      },
      { text: "4", isCorrect: false },
      {
        text: "16",
        isCorrect: true,
      },
    ],
  },
];

// import { getNoOfCorrectQuestions } from "./result.js";

const question = document.querySelector(".question");
const nextBtn = document.querySelector(".next-btn");
const clearBtn = document.querySelector(".clear-btn");
const [...option] = document.querySelectorAll(".option");
const body = document.querySelector("body");
const questionNumber = document.querySelector(".question-number span");
const volume = document.querySelector(".right-content img");

let currentQuestionIndex = localStorage.getItem("currentQuestionIndex") || 0;
let currentScore = parseInt(localStorage.getItem("currentScore")) || 0;

let correctAnswerAudio = new Audio("./assets/music/correct-ans.mp3");
let wrongAnswerAudio = new Audio("./assets/music/wrong-ans.mp3");

function showQuestion() {
  let clickCount = false;
  questionNumber.innerText = `${parseInt(currentQuestionIndex) + 1}`;

  let currentState = questionList[currentQuestionIndex];
  question.innerText = currentState.question;

  let currentOptionIndex = 1;
  currentState.answer.forEach((ans) => {
    let currentOption = document.querySelector(`#option${currentOptionIndex}`);
    currentOption.innerText = ans.text;
    currentOptionIndex++;

    currentOption.addEventListener("click", (e) => {
      if (!clickCount) {
        if (ans.isCorrect) {
          currentScore++;
          localStorage.setItem("currentScore", currentScore);
          currentOption.classList.add("correct");
          body.classList.add("correct-body-color");
          correctAnswerAudio.play();
        } else {
          currentOption.classList.add("incorrect");
          body.classList.add("incorrect-body-color");
          const correctIndex = questionList[
            currentQuestionIndex - 1
          ].answer.findIndex((item) => item.isCorrect === true);
          option[correctIndex].classList.add("correct");
          wrongAnswerAudio.play();
        }
        clickCount = true;
      }
    });
  });
  localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
  currentQuestionIndex++;

  // const noOfCorrectQuestions = document.querySelector(
  //   ".no-of-correct-question"
  // );
  // noOfCorrectQuestions.innerText = `${currentScore}`;
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 24) {
    alert("Your quiz is completed !!");
  }
  showQuestion();
  option.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("incorrect");
    body.classList.remove("correct-body-color");
    body.classList.remove("incorrect-body-color");
  });
});

let bgAudio = new Audio("./assets/music/background-music.mp3");
let isPlaying = false;

function togglePlay() {
  isPlaying ? bgAudio.pause() : bgAudio.play();
  isPlaying
    ? (volume.src = "./assets/images/volume-muted.png")
    : (volume.src = "./assets/images/volume-icon.png");
}

bgAudio.onplaying = function () {
  isPlaying = true;
};
bgAudio.onpause = function () {
  isPlaying = false;
};

volume.addEventListener("click", () => {
  togglePlay();
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

if (currentQuestionIndex < 24) {
  showQuestion();
}

export default currentScore;
