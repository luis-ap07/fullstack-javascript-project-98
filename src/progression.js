#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const progression = () => {

    
    function generarprogression() {

        const length = Math.floor(Math.random() * 6) + 5; 
        const start= Math.floor(Math.random() * 10) + 1;
        const step = Math.floor(Math.random() * 4) + 2;


        
        

        const progression = [];
        for (let i = 0; i < length; i++){
            progression.push(start + i * step);
        }
        return progression;
    }   
   

    function brainprogression() {   

    console.log('Welcome to the Brain Games!');
        
    const name =readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);

    console.log('Qué número falta en la progresión');
       
    let corrects = 0;    

    function play() { 

        const progression = generarprogression();
        const hiddenIndex = Math.floor(Math.random() * progression.length);
        const rcorrect = progression[hiddenIndex];
        
        const Pregunta = progression.map((num, index) =>
        index === hiddenIndex ? '..' : num);

        console.log(`Pregunta: ${Pregunta.join(' ')}`);
        const Answer = readlineSync.question('Tu respuesta: ');
        const intAnswer  = parseInt(Answer);            
                
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
    brainprogression();
}
