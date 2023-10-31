//calculati media aritmetica a unui array de numere

let arrDeNumere= [7, 9, 14, 2, 5, 53];

let sum = 0;
for(let i=0; i < arrDeNumere.length; i++){
    sum += arrDeNumere[i];
}

//Media aritmetica
let mediaAritmetica = sum / arrDeNumere.length;
console.log("Meida aritmetica a numerelor din array este: ", mediaAritmetica); 

//avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;

let mixtArr = [3, true, null, 7, 19, 34, 2, false, "hello"];

let sum2 = 0;
for(let i=0; i < mixtArr.length; i++){
    if (typeof mixtArr[i] === "number" ){
        sum2 += mixtArr[i]; 
    }
}
console.log("Suma numerelor din array este: ", sum2);

//BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;

var fibArray = [0, 1];

while (fibArray.length < 20) {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
}

/* ex. fibArray = [0, 1, 1];
fibArray.push(fibArray [3-1] + fibArray [3-2]);
fibArray.push(fibArray[2] + fibArray[1];
fibArray.push(1 + 1);
fibArray.push(2) => fibArray = [0, 1, 1, 2] => fibArray.length = 4 */

console.log("Primele 20 numere din șirul lui Fibonacci sunt: " + fibArray.join(', '));


