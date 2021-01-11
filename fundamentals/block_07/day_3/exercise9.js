const assert = require('assert');

function findTheNeedle(arr, item) {
  let index = -1;
  for (let word = 0, len = arr.length; word < len; word += 1) {
    if (arr[word] === item) {
      index = word;
    }
  }
  return index;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
