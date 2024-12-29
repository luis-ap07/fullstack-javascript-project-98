#!/usr/bin/env node

import readlineSync from 'readline-sync';

const progression = () => {
  function generarprogression() {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 4) + 2;
    const progres = [];
    for (let i = 0; i < length; i += 1) {
      progres.push(start + i * step);
    }
    return progres;
  }
  function brainprogression() {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
    console.log('¿Qué número falta en la progresión?');
    let corrects = 0;
    function play() {
      const progress = generarprogression();
      const hiddenIndex = Math.floor(Math.random() * progress.length);
      const rcorrect = progress[hiddenIndex];
      const Pregunta = progress.map((num, index) => (index === hiddenIndex ? '..' : num));
      console.log(`Pregunta: ${Pregunta.join(' ')}`);
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
  brainprogression();
};
export default progression;
