let cost = 100;
let price = 115;
let quantitySold = 1000;
let tax = cost * 0.2;
let totalCost = cost + tax;
let profit = (price - totalCost)*quantitySold;

if (profit < 0) {
  console.log("Your revenue is lower than 0!!!")
} else {
  console.log(profit)
}