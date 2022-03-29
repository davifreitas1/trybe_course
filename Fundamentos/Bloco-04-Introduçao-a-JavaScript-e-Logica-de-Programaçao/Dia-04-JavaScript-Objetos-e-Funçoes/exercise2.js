// Cria uma função que receba uma string e retorne true se for um palíndromo,
// ou false , se não for.

function palindromeVerification(word) {
  let wordReversed = word.split('').reverse().join('');
  if (wordReversed === word) {
   return true;
  } else {
   return false;
  }
};

console.log(palindromeVerification('arara'));

// Cria uma função que receba um array de inteiros e retorne o índice do
// maior valor.

let numbers = [2, 4, 6, 7, 10, 0, -3];

function biggestNumberOfArray(array) {
  let bigNumber = {
    value: 0,
    index: 0,
  };
  for (const key in array) {
    if (array[key] >= bigNumber.value) {
      bigNumber.value = array[key];
      bigNumber.index = key;
    }
  }
  return bigNumber.index;
}

console.log(biggestNumberOfArray(numbers));

// Cria uma função que receba um array de inteiros e retorne o índice do
// menor valor.

function smallestNumberOfArray(array) {
  let smallNumberIndex = 0;
  for (const key in array) {
    if (array[key] < array[smallNumberIndex]) {
      smallNumberIndex = array[key];
    }
  }
  return smallNumberIndex;
}

console.log(smallestNumberOfArray(numbers));

// Cria uma função que receba um array de nomes e retorne o nome com a
// maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largestName(array) {
  let name = '';
  for (let currentName of array) {
    if (currentName.length > name.length) {
      name = currentName;
    }
  }
  return name;
}

console.log(largestName(names));

// Cria uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let testNumbers = [2, 2, 2, 3, 3, 4, 4];

function mostRepeated(numeros) {
  let repeatedCounter = 0;
  let repetitions = 0;
  let repeatedNumberIndex = 0;
  for (let index in numeros) {
    let currentNumber = numeros[index];
    for (let index2 in numeros) {
      if (currentNumber === numeros[index2]) {
        repetitions += 1;
      }
    }
    if (repetitions > repeatedCounter) {
      repeatedCounter = repetitions;
      repeatedNumberIndex = index;
    }
    repetitions = 0;
  }
  return numeros[repeatedNumberIndex];
}

console.log(mostRepeated(testNumbers));

// Cria uma função que receba um número natural (número inteiro não negativo)
// N e retorna o somatório de todos os números de 1 até N.

function soma(numero) {
  let result = 0;
  for (let index = 1; index <= numero; index++) {
    result = result + index;
  }
  return result;
}

console.log(soma(5));

// Cria uma função que recebe uma string word e outra string ending .
// Verifique se a string ending é o final da string word .
// Considere que a string ending sempre será menor que a string word .

function compareWordEnding(string, ending) {
  string = string.split('');
  ending = ending.split('');
  control = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (string[string.length - ending.length + index] != ending[index]) {
      control = false;
    }
  }
  return control;
}

console.log(compareWordEnding('banana', 'ana'));
