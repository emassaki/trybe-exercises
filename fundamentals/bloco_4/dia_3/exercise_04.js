let n = 1;

for (let i = 1; i <= Math.ceil(n/2); i += 1) {
  let pyramid = "";
  for (let j = 1; j <= Math.ceil(n/2 - i); j += 1){
    pyramid += " ";
  }
  if (n % 2 == 0) {
    for (let k = 1; k <= i * 2; k += 1){
      pyramid += "*";
    }
  } else {
    for (let k = 1; k <= i * 2 - 1; k += 1){
      pyramid += "*";
    }
  }
  for (let j = 1; j <= Math.ceil(n/2 - i); j += 1){
    pyramid += " ";
  }
  console.log(pyramid);
}