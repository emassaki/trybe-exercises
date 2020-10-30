let wage = 3000;
let inss;
let ir;

if (wage <= 1556.94) {
  inss = wage*0.08;
  console.log(inss);
} else if (wage > 1556.94 && wage <= 2594.92) {
  inss = wage*0.09;
  console.log(inss);
} else if (wage > 2594.92 && wage <= 5189.86) {
  inss = wage*0.11;
  console.log(inss);
} else if (wage > 5189.86) {
  inss = 570.88;
  console.log(inss);
}

let wageSansINSS = wage - inss;

if (wageSansINSS <= 1903.98) {
  ir = wageSansINSS*0;
  console.log(ir);
} else if (wageSansINSS > 1903.98 && wageSansINSS <= 2826.65) {
  ir = wageSansINSS*0.075 - 142.80;
  console.log(ir);
} else if (wageSansINSS > 2826.65 && wageSansINSS <= 3751.05) {
  ir = wageSansINSS*0.15 - 354.80;
  console.log(ir);
} else if (wageSansINSS > 3751.05 && wageSansINSS <= 4664.68) {
  ir = wageSansINSS*0.225 - 636.13;
  console.log(ir);
} else if (wageSansINSS > 4664.68) {
  ir = wageSansINSS*0.275 - 869.36;
  console.log(ir);
}

let finalWage = wageSansINSS - ir;
console.log(finalWage);