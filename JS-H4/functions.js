const firstSentence = "Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus 1500 lei/luna din freelancing.";
const secondSentence = "Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ 500 usd/luna din freelancing.";

function computeIncome(sentence) {
    const cursEuro = 4.97;
    const cursDolar = 4.65;

    const words = sentence.split(" ");

    console.log(words);


    let venitTotalLei = 0;
    for(let i = 0; i < words.length; i++) {
        const number = parseFloat(words[i]);
        if (!isNaN(number)) {
        } if (words[i + 1] === "euro/luna") {
            venitTotalLei += number * cursEuro * 12;
          } else if (words[i + 1] === "usd/luna") {
            venitTotalLei += number * cursDolar * 12;
          } else if (words[i + 1] === "lei/luna" || words[i + 1] === "lei") {
            venitTotalLei += number * 12;
          } else if (words[i + 1] === "lei/an")
            venitTotalLei += number;
          
          console.log(venitTotalLei);
        }
      var nume = words[0];
      var mesaj = "Venitul total anual al lui " + nume + " este de " + venitTotalLei + " lei."
      
      return mesaj;
    }

console.log(computeIncome(firstSentence));    
console.log(computeIncome(secondSentence));

