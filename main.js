import { generateRandomNr } from "./scripts/generateRandomNr.js";

document.querySelector("#check").addEventListener("click", () => {
    let inputNumber =  document.querySelector("#inputNumber").value;
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
});

let randomNumber = generateRandomNr(1,10)
console.log(randomNumber);