const nota = 40;

if (nota < 0 || nota > 100) {
  console.log('Nota inválida');
} else if (nota >= 90) {
  console.log('Nota A');
} else if (nota >= 80) {
  console.log('Nota B');
} else if (nota >= 70) {
  console.log('Nota C');
} else if (nota >= 60) {
  console.log('Nota D');
} else if (nota >= 50) {
  console.log('Nota E');
} else {
  console.log('Nota F');
}
