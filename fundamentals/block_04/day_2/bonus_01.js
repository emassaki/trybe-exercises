let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i ; j++){
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);

// for i = 2 | putting 3 to index 0 and 5 to index 1
// j=0 - 3,9,5,19,70,8,100,2,35,27
// j=1 - 3,5,9,19,70,8,100,2,35,27

// for i = 5 | putting 8 to index 2 and 9 to index 3 and 19 to index 4
// j=0 - 3,5,8,19,70,9,100,2,35,27
// j=1 - 3,5,8,9,70,19,100,2,35,27
// j=2 - 3,5,8,9,19,70,100,2,35,27

// for i = 7 | putting 2 to index 0
// j=0 - 2,5,8,9,19,70,100,3,35,27
// j=1 - 2,3,8,9,19,70,100,5,35,27
// j=2 - 2,3,5,9,19,70,100,8,35,27
// j=3 - 2,3,5,8,19,70,100,9,35,27
// j=4 - 2,3,5,8,9,70,100,19,35,27
// j=5 - 2,3,5,8,9,19,100,70,35,27
// j=6 - 2,3,5,8,9,19,70,100,35,27

// for i = 8 | puting 35 to index 6 and 70 to index 7
// j=6 - 2,3,5,8,9,19,35,100,70,27
// j=7 - 2,3,5,8,9,19,35,70,100,27

// for i = 9 | putting 27 to index 6 and finishing the sorting
// j=6 - 2,3,5,8,9,19,27,70,100,35
// j=7 - 2,3,5,8,9,19,27,35,100,70
// j=8 - 2,3,5,8,9,19,27,35,70,100