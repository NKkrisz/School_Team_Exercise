export function check(){
    console.log("klikk volt");

    let inputNumber =  document.querySelector("#inputNumber").value;
    
    try {
        inputNumber = parseInt(inputNumber);
    } catch (error) {
        console.error("Nem számot adtál meg!");
        return;
    }
}