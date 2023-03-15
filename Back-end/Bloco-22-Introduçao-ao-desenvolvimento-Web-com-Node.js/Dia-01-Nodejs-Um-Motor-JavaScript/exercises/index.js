const readLineSync = require('readline-sync');

const appEscolhido = () => {
  const apps = ['Medir IMC', 'Calcular Velocidade', 'Sorteio'];
  const indiceEscolhido = readLineSync.keyInSelect(apps, 'Qual APP você quer usar?\nR: ');
  const nomeApp = apps[indiceEscolhido];
  
  if (nomeApp === 'Medir IMC') {
    return 'imc.js';
  }
  if (nomeApp === 'Calcular Velocidade') {
    return 'velocidadeMedia.js';
  }
  if (nomeApp === 'Sorteio') {
    return 'sorteio.js';
  }
};

require(`./${appEscolhido()}`);