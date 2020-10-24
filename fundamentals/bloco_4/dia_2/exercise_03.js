let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mean = 0;
let sum = 0;

for(let i in numbers) {
  sum += numbers[i];
}
console.log("The mean calculated with the numbers.length ouside the for loop is: " + sum/numbers.length);

// Using numbers.lenght inside the for loop causes an slight error in the result.

for (let i in numbers) {
  mean += numbers[i]/numbers.length;
}
console.log("The mean calculated with the numbers.length inside the for loop is: " + mean);
