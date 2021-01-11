let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let i in numbers) {
  if (numbers[i] % 2 != 0) {
    odd++;
  }
}
if (odd == 0){
  console.log("There is no odd numbers");
} else {
  console.log("The number of odd numbers in numbers array is: " + odd);
}

// Extra - Counting the number of even number in the array
let even = 0;

for (let i in numbers) {
  if (numbers[i] % 2 == 0) {
    even++;
  }
}

console.log("The number of odd numbers in numbers array is: " + even);