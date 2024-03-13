import{test,expect} from "@jest/globals"
import { compareNumbers } from "./compareNumbers.js"

test('On matching numbers returns the correct string' ,()=>{
    let guessNumber=5
    
    let generatedNumber=5
    let result = compareNumbers(guessNumber,generatedNumber)
    expect (result).toBe("a te számod helyes")
}) 