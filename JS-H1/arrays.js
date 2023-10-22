// Am creat cele 2 array-uri
let initialValues = [37, true, 2.3, 20, "cadouri", null, "craciun", 25, false]

console.log(initialValues);

let otherValues = [22, 11, 8, 4.5, "mere", "nuci", null, false, "covrigi", 2, 1, 1.5, true]

console.log(otherValues);

initialValues.push(otherValues);

console.log(initialValues);

// Am vazut care sunt variabilele de tip number
let i;
for (i=0; i < initialValues.length; i++){
    console.log(typeof initialValues[i]);
}

// Am facut operatii cu variabilele de tip number
let op1 = initialValues[0] + 3;
console.log(op1)
let op2 = initialValues[2] * 2;
let op3 = initialValues [3] / 5;
let op4 = initialValues [7] % 2;

// Am modificat array-ul initialValues cu noile valori calculate
initialValues[0] = op1;
initialValues[2] = op2;
initialValues[3] = op3;
initialValues[7] = op4;

console.log("Noul array", initialValues);

// Am concatentat stringurile din array-ul initialValues cu "happy coding"
console.log("cadouri" + " " + "craciun" + " " + "happy coding");

// Am inversat valorile boolene din initialValues
initialValues[1] = !initialValues[1];
initialValues[8] = !initialValues[8];

console.log(initialValues);