import readlineSync from 'readline-sync';

export const greetUser = () => {
	const name =readlineSync.question('¿Cuál es tu nombre?');
	console.log(`¡Hola, ${name}!`);
	};


