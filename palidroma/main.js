'use strict'

let parolaUtente = prompt('inserisci una parola').toLowerCase();


function palindroma(parola) {
   
    if (parolaUtente === parolaUtente.split("").reverse().join("")) {
        console.log('è palindroma');
        return 'è palindroma';
    } else{
        console.log('non è palindroma');
        return 'non è palindroma';
    }
}

let verifica = palindroma(parolaUtente);
console.log(parolaUtente);
console.log(parolaUtente.split("").reverse().join(""));



