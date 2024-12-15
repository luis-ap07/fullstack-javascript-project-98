#!/usr/bin/env node

import readlineSync from 'readline-sync';

function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function braineven() {
console.log('Welcome to the Brain Games!');
	
const name =readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${name}!`);
console.log("Responde 'yes' si el número es par, de lo contrario 'no'");

let corrects = 0;

function play() {
    const number = RandomNumber();
    const correct = number % 2 === 0? 'yes' : 'no';

    console.log(`Pregunta: ${number}`);
    const Answer=readlineSync.question('Tu respuesta: ');
    if (Answer.toLowerCase() === correct){ 
        console.log('¡Correcto!');
        corrects += 1;

        if (corrects === 3) {
            console.log(`¡Felicidades, ${name}!`);
        } else {
            play();
        }
     } else {
        console.log(`'${Answer} ' es una respuesta incorrecta ;(. La respuesta correcta era '${correct}' `);
        console.log(`¡Intentémos de nuevo, ${name}!`);
     }     
}
play();
}
braineven();