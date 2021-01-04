let testArray = [2, 3, 6, 7, 10, 1];

function smallestNumber(array) {
  console.log(array.indexOf(Math.min.apply(null, array)));
}

smallestNumber(testArray)

//Another way to search for the smallest number
function smallestNumber2(array) {
  let smallest = Infinity;
  for (let index in array) {
    if (array[index] < smallest) {
      smallest = array[index]
    }
  }
  console.log(array.indexOf(smallest))
}

smallestNumber2(testArray);