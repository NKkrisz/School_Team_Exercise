import { generateRandomNr } from "./scripts/generateRandomNr.js";
import { compareNumbers } from "./scripts/compareNumbers.js";

let input =  document.querySelector("#inputNumber");
input.value = "";

let lives = 5;
document.querySelector('.guesses').innerText = `Életed: ${lives}`;

let randomNumber = generateRandomNr(1,10)

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
    
    const result = compareNumbers(randomNumber, inputNumber);
    if(!result.includes("helyes")){
        lives--;
        document.querySelector('.guesses').innerText = `Életed: ${lives}`;
    } else {
        alert("Nyertél")
        location.reload();
    }

    document.querySelector('.result').innerText = result
    if(lives === 0){
        alert("Vesztettél")
        location.reload();
    }
});