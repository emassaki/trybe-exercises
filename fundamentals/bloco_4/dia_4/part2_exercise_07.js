let word = "trybe";
let ending = "be";

function lastLetters(word, ending) {
  let wordLen = word.length;
  let endingLen = ending.length;
  //End function if the ending string has more characters than the word string.
  if (wordLen < endingLen) {
    console.log("Ending word is longer than word.");
    return;
  }

  let wordLastLetters = "";
  //Takes the word string's last letters considering the length of the ending string
  for (let letter = wordLen - endingLen; letter < wordLen; letter += 1) {
    wordLastLetters += word[letter];
  }
  //Compares the word string's last letters with the ending string 
  if (ending == wordLastLetters) {
    console.log(true);
  } else {
    console.log(false);
  }
}

lastLetters(word, ending);