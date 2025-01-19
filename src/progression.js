#!/usr/bin/env node
import play from '../src/index.js';

import { generarprogression } from '../src/extras.js';

const juego = () => {
        
  const progress = generarprogression();
      const hiddenIndex = Math.floor(Math.random() * progress.length);
      const correct = progress[hiddenIndex];
      const join = progress.map((num, index) => (index === hiddenIndex ? '..' : num));
      const pregunta = (join.join(' '));
      
    return { 
      pregunta, 
      correct: String(correct),
    };
};
const texto = '¿Qué número falta en la progresión?';

export default () => play(texto, juego);
