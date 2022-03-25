const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Imprimir todos os itens do array


for (const number of numbers) {
  console.log(number);
}

// Somar todos os itens do array;

let total = 0;

for (const number of numbers) {
  total = total + number;
}

console.log(total);

// Média aritmética

const media = total / numbers.length;
console.log(media);

// Verificar se a média é maior que 20

if (media > 20) {
  console.log('A média é maior que 20');
} else {
  console.log('A média é menor que 20');
}

// Imprimir maior valor do array

let bigNumber = 0;

for (const number of numbers) {
  if (number >= bigNumber) {
    bigNumber = number;
  }
}

console.log(bigNumber);

// Imprimir menor valor

let smallNumber = numbers[0];

for (const number of numbers) {
  if (number <= smallNumber) {
    smallNumber = number;
  }
}

console.log(smallNumber);

// Contagem de quantos valores são ímpares

let contagem = 0;

for (const number of numbers) {
  if ((number % 2) !== 0) {
    contagem++;
  }
}

if (contagem === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(contagem + ' valores ímpares encontrados');
}

// Criar um for que conta de 1 até 25 vezes

for (let index = 0; index < 25; index++) {
  console.log(index + 1);
}

// Imprimir o resultado de cada elemento de numbers dividido por 2

const numbersDivision = [];

for (const number of numbers) {
  const division = number / 2;
  numbersDivision.push(division);
}

console.log(numbersDivision);
