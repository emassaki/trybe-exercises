let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("The sum of the numbers in the array is: " + sum);

sum = 0;
for(let i in numbers) {
  sum += numbers[i];
}
console.log("This is another way to do the sum and the result is: " + sum);