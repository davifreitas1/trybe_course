const readLineSync = require('readline-sync');

const velMedia = () => {
  const distancia = readLineSync.questionInt('Qual é a distância? (em metros)\nR: ');
  const tempo = readLineSync.questionInt('Quanto tempo? (em segundos)\nR: ');

  const vm = (distancia / tempo).toFixed(2);

  console.log(`\n${vm} m/s\n`);
};

velMedia();