function verificaPalindromo(word) {
  let backwardWord = "";
  for (let letter = word.length - 1; letter >= 0 ; letter -= 1) {
    backwardWord += word[letter];
  }
  if (word === backwardWord) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindromo("desenvolvimento");
