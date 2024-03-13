export function generateRandomNr(from,to){
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

generateRandomNr(10,100)