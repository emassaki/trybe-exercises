// const fetchJoke = require('./exercise_bonus');
// const response = {
//   id: '7h3oGtrOfxc',
//   joke: 'Whiteboards ... are remarkable.',
//   status: 200,
// };

// describe('Exercise bonus', () => {
//   const jk = jest.spyOn(jokes, 'fetchJoke').mockReturnValue(response.joke);
//   afterEach(jk.mockRestore);

//   it('should return a joke', async () => {
//     jk();
//     expect(jk).toHaveBeenCalled();
//     expect(jk).toHaveBeenCalledTimes(1);
//     expect(jk()).toBe('Whiteboards ... are remarkable.');
//     expect(jk).toHaveBeenCalledTimes(2);
//   });
// });

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

test("espera-se que o fetch retorne uma piada", () => {
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});