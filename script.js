import questions from "./questions.json" assert { type: "json" };

const question = document.querySelector(".question");
const [aText, bText, cText, dText] = document.querySelectorAll(".answer");

let counter = 0;
let correct = 0;
let answer;

const loadQuestion = () => {
  const currentQuestion = questions[counter];
  const { question: questionText, a, b, c, d, answer: correctAnswer } = currentQuestion;
  question.innerText = questionText;
  aText.innerText = a;
  bText.innerText = b;
  cText.innerText = c;
  dText.innerText = d;
  answer = correctAnswer;
};

loadQuestion(); // load initial question

document.querySelector("button").addEventListener("click", () => {
  const selectedAnswer = document.querySelector("input[type=radio]:checked");

  if (!selectedAnswer) return;
  else if (selectedAnswer.value === answer) correct++;

  if (++counter === questions.length) {
    document.querySelector(".quiz").innerHTML = `
        <h2>You scored ${correct}/${counter}</h2>
        <button onclick="location.reload()">Restart</button>
    `;
    return;
  }
  selectedAnswer.checked = false; // uncheck selected answer
  loadQuestion(); // load next question
});
