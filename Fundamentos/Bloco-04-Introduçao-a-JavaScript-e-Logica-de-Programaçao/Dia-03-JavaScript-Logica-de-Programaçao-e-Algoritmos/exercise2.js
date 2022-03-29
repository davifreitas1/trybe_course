// Criar lógica de inversor de palavras

const word = 'banana';
let result = '';

for (let index = word.length - 1; index >= 0; index--) {
  result += word[index];
}

console.log(result);