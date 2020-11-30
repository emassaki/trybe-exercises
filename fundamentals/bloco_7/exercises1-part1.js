// Exercise 1 - Part 1
let testingScope = (escopo) => { 
  if (!escopo) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Exercise 2 - Part 1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderedArray = (array) => {
  let len = array.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (array[j] > array[j + 1]) {
        let hold = array[j];
        array[j] = array[j + 1];
        array[j + 1] = hold;
      }
    }
  }
  return array;
};

console.log(`Os números ${orderedArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);
console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`);