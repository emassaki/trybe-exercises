let testArray = [2, 3, 6, 7, 10, 1];

function greatestNumber(array) {
  console.log(array.indexOf(Math.max.apply(null, array)));
}

greatestNumber(testArray)

//Another way to search for the greatest number
function greatestNumber2(array) {
  let greatest = -Infinity;
  for (let index in array) {
    if (array[index] > greatest) {
      greatest = array[index]
    }
  }
  console.log(array.indexOf(greatest))
}

greatestNumber2(testArray);