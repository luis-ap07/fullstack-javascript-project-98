#!/usr/bin/env node
import play from './index.js';

import { RandomNumber, RandomOperador } from './extras.js';

const juego = () => {
  let correct;
  const number1 = RandomNumber();
  const number2 = RandomNumber();
  const operador = RandomOperador();
  const pregunta = `${number1} ${operador} ${number2}`;
  if (operador === '+') {
    correct = number1 + number2;
  }
  if (operador === '-') {
    correct = number1 - number2;
  }
  if (operador === '*') {
    correct = number1 * number2;
  }
  return {
    pregunta,
    correct: String(correct),
  };
};
const texto = '¿Cuál es el resultado de la expresión?';

export default () => play(texto, juego);
