function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('function sum', () => {
  it('should sum to', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('should be numbers', () => {
    expect(() => sum(4,'5')).toThrowError(Error);
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
});
