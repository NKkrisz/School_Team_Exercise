import { generateRandomNr } from "./scripts/generateRandomNr.js";
import { compareNumbers } from "./scripts/compareNumbers.js";

let input =  document.querySelector("#inputNumber");
input.value = "";

let randomNumber = generateRandomNr(1,10)
console.log(randomNumber);

document.querySelector("#check").addEventListener("click", () => {
    inputNumber =  input.value;
    try {
        inputNumber = parseInt(inputNumber);
        if(isNaN(inputNumber)){
            throw new Error;
        }
        console.log(inputNumber);
    } catch (error) {
        console.error("Nem számot adtál meg!");
        return;
    }
    console.log(inputNumber, randomNumber);
    const result = compareNumbers(randomNumber, inputNumber);
    // TODO: display result in the result div
});