let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longestName(namesArray) {
  let longest = -Infinity;
  let indexOfLongest;
  for (let names of namesArray) {
    if (names.length > longest) {
      longest = names.length;
      indexOfLongest = namesArray.indexOf(names);
    }
  }
  console.log(namesArray[indexOfLongest]);
}

longestName(namesArray);