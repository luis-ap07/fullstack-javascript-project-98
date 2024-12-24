#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const greetUser = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('¿Cuál es tu nombre? ');
	console.log(`¡Hola, ${name}!`);
	};


