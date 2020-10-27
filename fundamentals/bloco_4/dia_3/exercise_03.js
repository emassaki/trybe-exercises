let n = 10;
let inverseTriangle = "";

for (let i = 1; i <= n; i += 1) {
  inverseTriangle = "";
  for (let j = n; j > i; j -= 1) {
  inverseTriangle += " ";
  }
  for (let k = 1; k <= i; k += 1){
  inverseTriangle += "*";
  }
  console.log(inverseTriangle)
}

