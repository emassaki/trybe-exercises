
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((newArray, currentArray) => newArray.concat(currentArray), []);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);