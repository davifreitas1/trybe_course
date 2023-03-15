const readLineSync = require('readline-sync');

const logResultado = (numero, resposta) => {
  if (numero !== resposta) {
    return console.log(`\nOpa, não foi dessa vez. O número era ${numero}\n`);
  }
  return console.log('\nParabéns, número correto!\n');
}

const runGame = () => {
  const numero = parseInt(Math.random() * 10);

  const resposta = readLineSync.questionInt(
    'Digite um número entre 0 e 10: '
  );

  logResultado(numero, resposta);

  const novamente = readLineSync.question(
    'Deseja jogar novamente? '
  );
  if (novamente === 's') {
    runGame();
  }
}

runGame();