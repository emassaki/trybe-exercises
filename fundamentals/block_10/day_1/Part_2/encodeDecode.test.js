const { decode, encode } = require('./encodeDecode');

describe('test encode and decode functions', () => {
  test('encode and decode are functions', () => {
    expect(typeof decode).toBe('function');
    expect(typeof encode).toBe('function');
  });

  test('encode changes vowels to numbers', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('decode changes numbers to vowels', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('decode and encode does not change consonants', () => {
    expect(encode('bcdfghjklmnpqrstvyxwz')).toBe('bcdfghjklmnpqrstvyxwz');
    expect(decode('67890')).toBe('67890');
  });

  test('result has same lenght as the original string', () => {
    expect(encode('string')).toHaveLength(6);
    expect(decode('str3ng')).toHaveLength(6);
    expect(encode('administration')).toHaveLength(14);
    expect(decode('1dm3n3str1t34n')).toHaveLength(14);
  });
});
