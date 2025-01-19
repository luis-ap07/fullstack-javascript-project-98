#!/usr/bin/env node

import play from './index.js';

import { RandomNumber, prim } from './extras.js';

const juego = () => {
  const pregunta = RandomNumber();
  const correct = prim(pregunta) ? 'yes' : 'no';
  return {
    pregunta,
    correct: String(correct),
  };
};
const texto = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no"'

export default () => play(texto, juego);
