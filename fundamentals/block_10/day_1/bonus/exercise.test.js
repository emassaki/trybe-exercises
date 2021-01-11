const searchEmployee = require('./exercise.js');
describe('check the function', () => {
  test('searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});

describe('searchEmployee runs correctly', () => {
  test('searchEmployee finds the ID', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });
});

describe('searchEmployee recieves an unknown ID or detail', () => {
  test('throws an error if unkown ID', () => {
    expect(() => searchEmployee('0000x', 'firstName')).toThrow();
  });
  test('check if error message is "ID não identificada" when ID is unknown', () => {
    expect(() => searchEmployee('1234-5', 'firstName')).toThrowError(
      new Error('ID não identificada')
    );
  });
  test('throws an error if unkown detail', () => {
    expect(() => searchEmployee('9852-2-2', 'country')).toThrow();
  });
  test('check if error message is "Informação indisponível" if details is unknown', () => {
    expect(() => searchEmployee('9852-2-2', 'country')).toThrowError(
      new Error('Informação indisponível')
    );
  });
});
