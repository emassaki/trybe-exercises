let integerArray = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedNumber(integerArray) {
  let mostRepeatedNumber = 0;
  let numberRepeated;
  //Loops through the array
  for (let number = 0; number < integerArray.length; number += 1) {
    let timesRepeated = 0;
    //Comparing the the number against the other array elements
    for (let comparingNumber = 0; comparingNumber < integerArray.length; comparingNumber += 1) {
      //If the number is repeated, then count it as repeated
      if (integerArray[number] == integerArray[comparingNumber]) {
        timesRepeated += 1;
      }
    }
    //Compares how many times the number repeats. If repeats more than the other numbers, it turns to be the most repeated and then shows which number it is.
    if (timesRepeated > mostRepeatedNumber) {
      mostRepeatedNumber = timesRepeated;
      numberRepeated = integerArray[number];
    }
  }

  console.log(numberRepeated)
}

mostRepeatedNumber(integerArray);