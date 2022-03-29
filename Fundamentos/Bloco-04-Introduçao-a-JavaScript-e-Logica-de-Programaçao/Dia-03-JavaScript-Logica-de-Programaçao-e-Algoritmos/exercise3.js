// Cria lógica que identifica maior e menor palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (const word of array) {
  if (word.length > maior.length) {
    maior = word;
  } else if (word.length < menor.length || menor === '') {
    menor = word;
  }
}
console.log('A maior palavra é ' + maior);
console.log('A menor palavra é ' + menor);