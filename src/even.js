#!/usr/bin/env node

import play from './index.js';

import { RandomNumber } from './extras.js';

const juego = () => {
  const number = RandomNumber();
  const pregunta = `${number}`;
  const correct = number % 2 === 0 ? 'yes' : 'no';
  return { pregunta, correct };
};
const texto = 'Responde "yes" si el número es par, de lo contrario responde "no".';

export default () => play(texto, juego);
