import { check } from "./scripts/check.js";
import { generateRandomNr } from "./scripts/generateRandomNr.js";

document.querySelector("#check").addEventListener("click", check);

let randomNumber 

window.addEventListener('load', ()=> {
    randomNumber = generateRandomNr(1,10)
})