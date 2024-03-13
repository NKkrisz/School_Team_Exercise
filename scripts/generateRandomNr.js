export function generateRandomNr(from,to){
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

console.log(generateRandomNr(10,100))