let N = 5;
let txt = "";

function progressiveSum(N) {
  let sum = 0;
  for (let numbers = 1; numbers <= N; numbers += 1) {
    sum += numbers;
    if (numbers < N) {
      txt += numbers + " + ";
    } else {
      txt += numbers + " = ";
    }
  }
  console.log(txt + sum);
}

progressiveSum(N);