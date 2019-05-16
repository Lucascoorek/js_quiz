import "../src/styles/main.scss";

const answers = ["A", "B", "B", "B"];
const form = document.querySelector(".form");
const resultDiv = document.querySelector(".result");
const result = document.querySelector(".result span");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  const formAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  formAnswers.forEach((val, index) => {
    if (val === answers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  resultDiv.classList.remove("d-none");
  let points = 0;

  const timer = setInterval(() => {
    result.textContent = `${points}%`;
    if (points === score) {
      clearInterval(timer);
    }
    points++;
  }, 20);
});
