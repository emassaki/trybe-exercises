let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallest = Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("The smallest number in array numbers is :" + smallest);