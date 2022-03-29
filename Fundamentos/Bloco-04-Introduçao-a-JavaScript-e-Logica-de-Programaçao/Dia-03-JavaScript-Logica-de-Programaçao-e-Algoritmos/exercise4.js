// Lógica que retorna números primos

const number = 50;
let biggestNumber = 0;

for (let currentNumber = 0; currentNumber <= number; currentNumber++) {
  let primo = true;
  for (let index = 2; index < currentNumber; index++){
    if (currentNumber % index === 0) {
      primo = false;
    }
  }
  if (primo) {
    biggestNumber = currentNumber;
  }
}

console.log(biggestNumber);