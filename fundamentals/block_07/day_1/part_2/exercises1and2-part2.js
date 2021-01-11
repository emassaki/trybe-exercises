// Exercise 1 - Part 2
let factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i += 1) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

let factorial2 = (num) => num > 1 ? num * factorial2(num - 1) : 1;
console.log(factorial2(5))

// Exercise 2 - Part 2
let longestWord = (string) => {
  let words = string.split(' ');
  let longest = '';
  for (let word of words) {
    longest = word.length > longest.length ? word : longest;
  }
  return longest;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


