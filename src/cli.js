#!/usr/bin/env node

import readlineSync from 'readline-sync';

export let name;
const greetUser = () => {
    console.log('¡Bienvenido a Brain Games!');
    name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
};
export default greetUser;
