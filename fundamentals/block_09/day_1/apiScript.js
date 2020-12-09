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
      return reject(sumOfSqrdArray);
    }
    resolve(sumOfSqrdArray);
  })
    // Exercise 3 - log an array with the division result of 2, 3, 5 and 10
    .then((number) =>
      console.log([2, 3, 5, 10].map((quotient) => Math.round((number / quotient) * 100) / 100))
    )
    .catch((number) => console.log(`A soma dos quadrados do array, ${number}, é maior que 8000`));
};

window.onload = () => fetchJoke();
