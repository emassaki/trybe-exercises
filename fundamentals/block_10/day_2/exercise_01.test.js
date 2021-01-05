const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testing the callback', done => {
  uppercase('string', (string) => {
    expect(string).toBe('STRING');
    done();
  });
});
