const functions = require('./exercise_04_and_05');

describe('Exercise 5', () => {
  it('Capitalize function should minimalize the string', () => {
    const first = jest
      .spyOn(functions, 'capitalize')
      .mockImplementation((string) => string.toLowerCase());
    expect(first('String')).toBe('string');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('String');

    functions.capitalize.mockRestore();

    expect(functions.capitalize('string')).toBe('STRING');
  });
});