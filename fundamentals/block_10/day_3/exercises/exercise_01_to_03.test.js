const randomNumber = require('./exercise_01_to_03.js');

describe('Exercise 1', () => {
  it('Should be called and return value 10', () => {
    randomNumber.randomNumber = jest.spyOn(randomNumber, 'randomNumber').mockReturnValue(10);
    expect(randomNumber.randomNumber()).toBe(10);
    expect(randomNumber.randomNumber).toHaveBeenCalled();
    expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
    randomNumber.randomNumber.mockReset();
  });
});

describe('Exercise 2', () => {
  it('Should test a new implementation', () => {
    randomNumber.randomNumber = jest
      .spyOn(randomNumber, 'randomNumber')
      .mockImplementationOnce((a, b) => a / b);
    expect(randomNumber.randomNumber(10, 5)).toBe(2);
    expect(randomNumber.randomNumber).toHaveBeenCalled();
    expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.randomNumber).toHaveBeenCalledWith(10, 5);
    randomNumber.randomNumber.mockReset();
  });
});

describe('Exercise 3', () => {
  it('Should implement a multiplication', () => {
    randomNumber.randomNumber = jest
      .spyOn(randomNumber, 'randomNumber')
      .mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber.randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber.randomNumber).toHaveBeenCalled();
    expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.randomNumber).toHaveBeenCalledWith(1, 2, 3);
    randomNumber.randomNumber.mockRestore();
  });
  it('Should implement the double of the number', () => {
    randomNumber.randomNumber = jest
      .spyOn(randomNumber, 'randomNumber')
      .mockImplementation((a) => a * 2);
    expect(randomNumber.randomNumber(2)).toBe(4);
    expect(randomNumber.randomNumber).toHaveBeenCalled();
    expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.randomNumber).toHaveBeenCalledWith(2);
    randomNumber.randomNumber.mockRestore();
  });
});
