const noOfCorrectAns = document.querySelector(".no-of-correct-question span");
import { currentScore } from "./index.js";
noOfCorrectAns.innerText = `${localStorage.getItem("currentScore")}`;
