const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      // Exercise 1 - add a joke to the page
      document.getElementById('jokeContainer').innerHTML = data.joke;
    });

  // Exercise 2 - check if the promise is resolved or rejected
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      array.push(Math.ceil(Math.random() * 50));
    }
    const sumOfSqrdArray = array
      .map((number) => number ** 2)
      .reduce((total, curr) => (total += curr));
    if (sumOfSqrdArray >= 8000) {
      return reject();
    }
    resolve(sumOfSqrdArray);
  })
    // Exercise 3 - return an array with the division result of 2, 3, 5 and 10
    .then((number) => [2, 3, 5, 10].map((quotient) => Math.round((number / quotient) * 100) / 100))
    // Exercise 5 - sum all the array values
    .then((array) => console.log(array.reduce((total, number) => (total += number))))
    // Exercise 4 - log a message when reject promise
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

window.onload = () => fetchJoke();
