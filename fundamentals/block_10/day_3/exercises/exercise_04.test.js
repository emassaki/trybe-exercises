const functions = require('./exercise_04_and_05');

jest.mock('./exercise_04_and_05');

describe('Exercise 4', () => {
  it('Capitalize function should minimalize the string', () => {
    functions.capitalize.mockImplementation((string) => string.toLowerCase());
    expect(functions.capitalize('String')).toBe('string');
    expect(functions.capitalize).toHaveBeenCalled();
    expect(functions.capitalize).toHaveBeenCalledTimes(1);
    expect(functions.capitalize).toHaveBeenCalledWith('String');
    functions.capitalize.mockClear();
    console.log(functions.capitalize('strIng'));
  });
  it('firstLetter function should get the last letter of the string', () => {
    functions.firstLetter.mockImplementation((string) => string[string.length - 1]);
    expect(functions.firstLetter('string')).toBe('g');
    expect(functions.firstLetter).toHaveBeenCalled();
    expect(functions.firstLetter).toHaveBeenCalledTimes(1);
    expect(functions.firstLetter).toHaveBeenCalledWith('string');
  });
  it('concatenateStrings function should concatenate 3 strings', () => {
    functions.concatenateStrings.mockImplementation(
      (string1, string2, string3) => string1 + string2 + string3
    );
    expect(functions.concatenateStrings('a', 'b', 'c')).toBe('abc');
    expect(functions.concatenateStrings).toHaveBeenCalled();
    expect(functions.concatenateStrings).toHaveBeenCalledTimes(1);
    expect(functions.concatenateStrings).toHaveBeenCalledWith('a', 'b', 'c');
  });
});
