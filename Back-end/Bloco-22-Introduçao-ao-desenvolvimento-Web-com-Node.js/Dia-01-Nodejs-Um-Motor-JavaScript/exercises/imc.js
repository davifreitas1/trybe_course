const readLineSync = require('readline-sync');

const imcCalc = () => {
  const peso = readLineSync.questionFloat('Quanto você pesa? (em kg)\nR: ');
  const altura = readLineSync.questionInt('Quanto você tem de altura? (em cm)\nR: ');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  
  console.log(`\nSeu imc é de ${imc}`);
  
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)\n');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal\n');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)\n');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I\n');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II\n');
    return;
  }
  console.log('Situação: Obesidade graus III e IV\n');
};

imcCalc();
