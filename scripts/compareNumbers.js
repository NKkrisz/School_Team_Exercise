export function compareNumbers(generatedNumber,guessNumber){
    if(generatedNumber==guessNumber){
        return "a te számod helyes"
    }else if(generatedNumber<guessNumber){
        return "a te számod nagyobb"
    }else{
        return "a te számod kisebb"
    }
}

console.log(compareNumbers(46,50))