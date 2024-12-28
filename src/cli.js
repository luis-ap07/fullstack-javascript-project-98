#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const greetUser = () => {
  function braingames() {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
  }
  braingames();
};
