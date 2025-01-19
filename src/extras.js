#!/usr/bin/env node

const RandomNumber = () => Math.floor(Math.random() * 100) + 1;

const RandomOperador = () => {
  const operadores = ['+', '-', '*'];
  const indice = Math.floor(Math.random() * operadores.length);
  return operadores[indice];
};

const MCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return MCD(b, a % b);
};

const prim = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generarprogression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 4) + 2;
  const progres = [];
  for (let i = 0; i < length; i += 1) {
    progres.push(start + i * step);
  }
  return progres;
};

export {
  RandomNumber, RandomOperador, MCD, prim, generarprogression
};
