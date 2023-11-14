'use strict';

const sceltaUtente = prompt('Scegli tra Pari e Dispari').toLowerCase();
const numeroUtente = prompt('Scegli un numero tra 1 a 5');
console.log('Scleta Utente:', sceltaUtente);
console.log('Numero Utente', numeroUtente);

function sceltaComputer (computer) {
    return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = sceltaComputer ();
console.log('Numero Computer', numeroComputer);


const somma = +numeroUtente + numeroComputer;
console.log('Somma', somma);

   if (sceltaUtente === 'pari' && somma % 2 === 0) {
    console.log('Utente vince');
    
} else if (sceltaUtente === 'dispari' && somma % 2 !== 0) {
    console.log('Utente vince');
} else {
    console.log('Computer vince');
}


