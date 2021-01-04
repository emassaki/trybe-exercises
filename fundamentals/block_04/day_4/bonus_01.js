let decimalNumber = 0;
let mainRomanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convertRomanNumber(romanNumeral) {
  for (let romanDigits = romanNumeral.length - 1; romanDigits >= 0; romanDigits -= 1){
    let numberRight = mainRomanNumbers[`${romanNumeral[romanDigits]}`];
    let numberLeft = mainRomanNumbers[`${romanNumeral[romanDigits - 1]}`];
    
    if (numberLeft == undefined){
      decimalNumber += numberRight;
    } else 
    if (numberLeft < numberRight) {
      decimalNumber += (numberRight - numberLeft);
      romanDigits -= 1;
    } else 
    if (numberLeft >= numberRight) {
      decimalNumber += numberRight;
    }
  }

  console.log(decimalNumber)
}

convertRomanNumber("MCXCIX");