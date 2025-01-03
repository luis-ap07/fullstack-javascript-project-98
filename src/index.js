#!/usr/bin/env node

import readlineSync from 'readline-sync';

const index = () => {
  function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function RandomOperador() {
    const operadores = ['+', '-', '*'];
    const indice = Math.floor(Math.random() * operadores.length);
    return operadores[indice];
  }
  function braincalc() {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
    console.log('¿Cuál es el resultado de la expresión?');
    let corrects = 0;
    let rcorrect;
    function play() {
      const number1 = RandomNumber();
      const number2 = RandomNumber();
      const operador = RandomOperador();
      const Pregunta = `${number1} ${operador} ${number2}`;
      console.log(`Pregunta: ${Pregunta}`);
      const Answer = readlineSync.question('Tu respuesta: ');
      if (operador === '+') {
        rcorrect = number1 + number2;
      }
      if (operador === '-') {
        rcorrect = number1 - number2;
      }
      if (operador === '*') {
        rcorrect = number1 * number2;
      }
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
  braincalc();
};
export default index;
