#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const prime = () => { 

function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function prime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true
}

function brainprime() {

console.log('¡Bienvenido a Brain Games!');
	
const name = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${name}!`);
console.log('Responde "yes" si el número es primo. De lo contrario, responde "no"');

let corrects = 0;

function play() {
    const number = RandomNumber();
    const correct = prime(number) ? 'yes' : 'no';

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
        console.log(`'${Answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correct}' `);
        console.log(`¡Intentémos de nuevo, ${name}!`);
     }     
}
play();
}
brainprime();

}
