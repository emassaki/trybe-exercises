const { TestScheduler } = require('jest');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

describe('myRemove function', () => {
  it('returns array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  test('does not change the array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
