const changeCharacters = (string, character) => {
  let phrase = '';
  for (let char of string) {
    if (!character[char]) {
      phrase += char;
    } else {
      phrase += character[char];
    }
  }
  return phrase;
};

const encode = (string) => {
  let character = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return changeCharacters(string, character);
};

const decode = (string) => {
  let character = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return changeCharacters(string, character);
};

module.exports = {
  decode,
  encode,
};
