let capacitateCilindrica= prompt("Ce capacitate cilindrica (in cm3) are autoturismul dvs.?");
console.log("Capacitatea cilindrica a motorului este de ", capacitateCilindrica, "cm3");

if(isNaN(capacitateCilindrica)){
    alert("Valoarea introdusa nu este un numar valid!")
} else {
    const numarFractiuni = capacitateCilindrica / 200;
    const numarFractiuniRotunjit = Math.floor(numarFractiuni);
    if(capacitateCilindrica <= 1600){
        const valoareImpozit = numarFractiuniRotunjit * 8;
        console.log("Valoarea impozitului dvs. auto este de ", valoareImpozit, " RON");
    } else if (capacitateCilindrica <= 2000){
            const valoareImpozit = numarFractiuniRotunjit * 22;
            console.log("Valoarea impozitului dvs. auto este de ", valoareImpozit, " RON");
        } else if(capacitateCilindrica <= 2600){
                const valoareImpozit = numarFractiuniRotunjit * 85;
                console.log("Valoarea impozitului dvs. auto este de ", valoareImpozit, " RON");
            } else if(capacitateCilindrica <= 3000){
                    const valoareImpozit = numarFractiuniRotunjit * 171;
                    console.log("Valoarea impozitului dvs. auto este de ", valoareImpozit, " RON");
                } else if(capacitateCilindrica > 3000){
                        const valoareImpozit = numarFractiuniRotunjit * 345;
                        console.log("Valoarea impozitului dvs. auto este de ", valoareImpozit, " RON");
                    } 
        }
    
let tipVehicol= prompt("Aveti un alt tip de vehicul inafara de autoturism? Daca da, care?")

console.log(tipVehicol);

const capacitateCilindrica2 = prompt("Ce capacitate cilindrica (in cm3) are vehicolul dvs.?");
console.log("Capacitatea cilindrica a motorului este de ", capacitateCilindrica2, "cm3");
const numarFractiuni2 = capacitateCilindrica2 / 200;
const numarFractiuni2Rotunjit = Math.floor(numarFractiuni2);

switch(tipVehicol){
    case "motocicleta":
    case "triciclu":
    case "cvadriciclu":
        if(capacitateCilindrica2 <= 1600){
            const valoareImpozit2 = numarFractiuni2Rotunjit * 8;
            console.log("Valoarea impozitului dvs. este de ", valoareImpozit2, " RON");
        } else if(capacitateCilindrica2 > 1600){
                const valoareImpozit2 = numarFractiuni2Rotunjit * 9;
                console.log("Valoarea impozitului dvs. este de ", valoareImpozit2, " RON");
            }
    break
    case "autobuz":
    case "autocar":
    case "microbuz":
        const valoareImpozit3 = numarFractiuni2Rotunjit * 28;
        console.log("Valoarea impozitului dvs. este de ", valoareImpozit3, " RON");  
    break
    case "tractor":
        const valoareImpozit4 = numarFractiuni2Rotunjit * 22;
        console.log("Valoarea impozitului dvs. este de ", valoareImpozit4, " RON");
    break
    default:
        console.log ("Valoarea introdusa nu se incadreaza in nicio categorie de mijloace de transport.");
    }

    

