const assert = require('assert');

function wordLengths(wordsArray) {
  const wordLen = [];
  wordsArray.forEach((item, index) => wordLen[index] = item.length);
  return wordLen;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);