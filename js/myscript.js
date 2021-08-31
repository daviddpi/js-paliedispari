//funzione che controlla se la parola è palindroma
function controlloPalindroma(str){
    // if(str == str.split("").reverse().join("")){
    //     return "La parola è palindroma: " + " " + str;
    // } else{
    //     return "La parola non è palindroma: " + " " + str;
    // }
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    if(str == reverseStr){
        return "La parola è palindroma: " + " " + str;
    } else{
        return "La parola non è palindroma: " + " " + str;
    }

}

//funzione che genera numeri random da 1 a 5
function Random5(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Il massimo è escluso e il minimo è incluso
}

//funzione che stabilisce se la somma di 2 numeri è pari o dispari
function sommaPariODispari(num1,num2){
    let somma = num1 + num2;
    if(somma % 2 == 0){
        alert("La somma dei due nomi è PARI");
        return  somma = "pari";
    } 
    alert("La somma dei due numeri è DISPARI");
    return somma = "dispari";
}

// PALINDROMA
//inserisci la parola
let parola = prompt("Inserisci una parola");
//richiama la funzione per stabilire se è palindroma
let risultatoParola = controlloPalindroma(parola);
console.log(risultatoParola); //stampa il risultato


//PARI E DISPARI
//chiede all'utente un numero da 1 a 5
let scommessaUtente = prompt("Secondo te il numero che uscirà fuori e pari o dispari?");
if(scommessaUtente != "pari" && scommessaUtente != "dispari"){
    alert("La tua scelta non è ne pari e ne dispari, in automatico sarà pari");
    scommessaUtente = "pari";
}
console.log(scommessaUtente);

let numeroUtente = parseInt( prompt("Inserisci un numero da 1 a 5") );
if(numeroUtente < 1 || numeroUtente > 5){ // se il numero è diverso sarà scelto randomicamente
    alert("Hai scelto un numero diverso, il tuo numero ora sarà randomico");
    numeroUtente = Random5(1,6);
}

//numero del computer scelto randomicamente
let numeroComputer = Random5(1,6);

console.log("Numero utente: " + numeroUtente);
console.log("Numero computer: " + numeroComputer);

//richiama la funziona che somma e verifica se pari e dispari
let risultatoNumeri = sommaPariODispari(numeroUtente, numeroComputer);
console.log(risultatoNumeri);

if(scommessaUtente == risultatoNumeri){
    alert("Complimenti hai vinto");
} else{
    alert("Mi dispiace hai perso");
}

