let array = [];

for (let i = 1; i <= 25; i++) {
  array.push(i);
}
console.log(array);

for (let i in array) {
  console.log(array[i]/2);
}