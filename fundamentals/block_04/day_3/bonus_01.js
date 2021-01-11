let n = 9;

for (let lines = 1; lines <= Math.ceil(n/2); lines += 1) { //defines number of lines
  let hollowPyramid = ""; //empties the string
  if (lines < Math.ceil(n/2)) {
    
    for (let j = 1; j <= Math.ceil(n/2 - lines); j += 1){ //create the blank spaces to the left
      hollowPyramid += " ";
    }
    
    if (n % 2 == 0) { //if n is even, then: 
      hollowPyramid += "*";
      for (let blankSpaces = 2; blankSpaces < lines * 2; blankSpaces += 1){ //creates an even number of blank spaces inside the pyramid
        hollowPyramid += " ";
      }
      hollowPyramid += "*";
    } 

    else { //if n is odd then:
      if (lines == 1) {
        hollowPyramid += "*";
      } else {
        hollowPyramid += "*";
        for (let blankSpaces = 2; blankSpaces < lines * 2 - 1; blankSpaces += 1){ //creates an odd number of blank spaces inside the pyramid
          hollowPyramid += " ";
        }
        hollowPyramid += "*";
      }
    }

    for (let blankSpaces = 1; blankSpaces <= Math.ceil(n/2 - lines); blankSpaces += 1){ //creates the blank spaces to the right
      hollowPyramid += " ";
    }
    console.log(hollowPyramid);

  } else {
    for (let lastLine = 0; lastLine < n; lastLine += 1) {
      hollowPyramid += "*";
    }
    console.log(hollowPyramid);
  }
}