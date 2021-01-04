let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mean = 0;
let sum = 0;

for(let i in numbers) {
  sum += numbers[i];
}
mean = sum/numbers.length;

if (mean > 20) {
  console.log("Value greater than 20!");
} else {
  console.log("Value less than or equal to 20!");
}
