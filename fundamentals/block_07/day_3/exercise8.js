const assert = require('assert');

function addAllNumbers(array) {
  let sum = 0;
  array.forEach((item) => (sum += item));
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllNumbers(numbers);

assert.strictEqual(typeof addAllNumbers, 'function');
assert.strictEqual(output, expected);
