const { TestScheduler } = require('jest');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('check if objects are equals', () => {
  test('obj1 and obj2 are equals', () => {
    expect(obj1).toEqual(obj2);
  })
  test('obj1 and obj2 are different than obj3', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj1).not.toEqual(obj3);
  })
})