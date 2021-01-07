const fetchDog = require('./exercise_06');

describe('Exercise 6', () => {
  const dog = jest.spyOn(fetchDog, 'fetchDog');
  afterEach(dog.mockReset);

  it('should fulfill the request', async () => {
    dog.mockResolvedValue('resolved request');
    dog();
    expect(dog).toHaveBeenCalled();
    expect(dog).toHaveBeenCalledTimes(1);
    expect(dog()).resolves.toBe('resolved request');
    expect(dog).toHaveBeenCalledTimes(2);
  });
  
  it('should not fulfill the request', async () => {
    dog.mockRejectedValue('rejected request');
    dog();
    expect(dog).toHaveBeenCalled();
    expect(dog).toHaveBeenCalledTimes(1);
    expect(dog()).rejects.toBe('rejected request');
    expect(dog).toHaveBeenCalledTimes(2);
  });
});
