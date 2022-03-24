const a = 60;
const b = 60;
const c = -1;

const anyNegativeAngle = a < 0 || b < 0 || c < 0;

if (anyNegativeAngle) {
  console.log('Erro: triângulo inválido');
} else {
  if (a + b + c === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}