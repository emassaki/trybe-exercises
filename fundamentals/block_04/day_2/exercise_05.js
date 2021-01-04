let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greatest = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > greatest) {
    greatest = numbers[i];
  }
}
console.log("The gratest number in array numbers is :" + greatest);
