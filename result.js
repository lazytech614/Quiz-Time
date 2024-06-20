const noOfCorrectAns = document.querySelector(".no-of-correct-question span");
import currentScore from "./index.js";

noOfCorrectAns.addEventListener("click", () => {
  console.log(currentScore);
});
