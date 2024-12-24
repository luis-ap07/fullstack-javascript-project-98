#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const index = () => {

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
        
    const name =readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
       
    let corrects = 0;
    let rcorrect;

    function play() { 

        const number1 = RandomNumber();
        const number2 = RandomNumber();
        const operador = RandomOperador();
        
        const Pregunta = `${number1} ${operador} ${number2}`;

        console.log(`Pregunta: ${Pregunta}`);
        const Answer = readlineSync.question('Tu respuesta: ');
        const intAnswer  = parseInt(Answer);
        

            if (operador === '+')rcorrect = number1 + number2;
            
            if (operador === '-')rcorrect = number1 - number2;
            
            if (operador === '*')rcorrect = number1 * number2;   
                
            if (intAnswer === rcorrect){ 
                console.log('¡Correcto!');
                corrects += 1;
        
                if (corrects === 3) {
                    console.log(`¡Felicidades, ${name}!`);
                } else {
                    play();
                }
             } else {
                console.log(`'${Answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${rcorrect}' `);
                console.log(`¡Intentémos de nuevo, ${name}!`);
             }          
        
         }
    play();
        }
    braincalc();

}
