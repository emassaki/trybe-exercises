function add(num1, num2) {
  const firstNum = num1.toString();
  const secondNum = num2.toString();
  let bigNum;
  let smallNum;

  if (firstNum.length > secondNum.length) {
    bigNum = firstNum;
    smallNum = secondNum;
  } else {
    bigNum = secondNum;
    smallNum = firstNum;
  }

  let lenDiff = bigNum.length - smallNum.length
  for (let i = 0; i < lenDiff; i ++) {
    smallNum = "0" + smallNum;
  }

  let result = "";
  for (let i = 0; i < bigNum.length; i ++) {
    let sum = String(parseInt(bigNum[i]) + parseInt(smallNum[i]));
    result += sum;
  }

  return parseInt(result);
}

console.log(add(11,2))