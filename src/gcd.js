#!/usr/bin/env node

import play from './index.js';

import { RandomNumber, MCD } from './extras.js';

const juego = () => {
  const number1 = RandomNumber();
  const number2 = RandomNumber();
  const correct = MCD(number1, number2);
  const pregunta = `${number1} ${number2}`;
  return {
    pregunta,
    correct: String(correct),
  };
};
const texto = 'Encuentra el máximo común divisor de los números dados.'

export default () => play(texto, juego);
