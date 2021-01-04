function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('Check fizzBuzz', () => {
  it('is divided by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('is divided by 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('is divided by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('is not divided by 3 or 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('is not a number', () => {
    expect(myFizzBuzz('4')).toBeFalsy();
  });
});
