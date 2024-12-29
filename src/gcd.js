#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = () => {
  function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function MCD(a, b) {
    if (b === 0) {
      return a;
    }
    return MCD(b, a % b);
  }
  function braingcd() {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
    console.log('Encuentra el máximo común divisor de los números dados.');
    let corrects = 0;
    function play() {
      const number1 = RandomNumber();
      const number2 = RandomNumber();
      const rcorrect = MCD(number1, number2);
      const Pregunta = `${number1} ${number2}`;
      console.log(`Pregunta: ${Pregunta}`);
      const Answer = readlineSync.question('Tu respuesta: ');
      if (parseInt(Answer, 10) === rcorrect) {
        console.log('¡Correcto!');
        corrects += 1;
        if (corrects === 3) {
          console.log(`¡Felicidades, ${name}!`);
        } else {
          play();
        }
      } else {
        console.log(`'${Answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${rcorrect}' `);
        console.log(`¡Intentémoslo de nuevo, ${name}!`);
      }
    }
    play();
  }
  braingcd();
};
export default gcd;
