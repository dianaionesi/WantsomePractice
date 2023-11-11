const firstSentence = "Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus 1500 lei/luna din freelancing.";
const secondSentence = "Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ 500 usd/luna din freelancing.";

function computeIncome(sentence) {
    const cursEuro = 4.97;
    const cursDolar = 4.65;

    const words = sentence.split(" ");

    console.log(words);

    const numbers = [ ];

    let venitTotalLei = 0;
    for(let i = 0; i < words.length; i++) {
        const number = parseFloat(words[i]);
        if (!isNaN(number)) {
        } if (words[i + 1] === "euro") {
            venitTotalLei += number * cursEuro;
          } else if (words[i + 1] === "usd") {
            venitTotalLei += number * cursDolar;
          } else if (words[i + 1] === "lei" && words[i].toLowerCase() !== "euro" && words[i].toLowerCase() !== "usd") {
            venitTotalLei += number;
          }
        }
      
      return "Venitul total anual al lui NUME este de ${venitTotalLei.toFixed(2)}lei."
    }

console.log(computeIncome(firstSentence.replace("NUME", "Ion")));    
console.log(computeIncome(secondSentence.replace("NUME", "Andrei")));

