#!/usr/bin/env node
import greetUser from '../src/cli.js';

import { name } from '../src/cli.js';

import readlineSync from 'readline-sync';

  const play = (texto,  juego) => {        
    greetUser();
    console.log(texto);
    let corrects = 0;

    function game() {
    const { pregunta, correct } = juego();
    console.log(`Pregunta: ${pregunta}`);
    const Answer = readlineSync.question('Tu respuesta: ');    

    if (Answer === correct) {
      console.log('¡Correcto!');
      corrects += 1;
      if (corrects === 3) {
          console.log(`¡Felicidades, ${name}!`);
      } else {
        game();
      }
    } else {
      console.log(`'${Answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correct}' `);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
    }
    }
    game();
  };
  export default play;
