let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  // cheks if it's the last number in the array. If it is, then multiply it by 2.
  if (i + 1 < numbers.length) {
    let x = numbers[i] * numbers[i + 1];
    newNumbers.push(x);
  } else {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log(newNumbers);
