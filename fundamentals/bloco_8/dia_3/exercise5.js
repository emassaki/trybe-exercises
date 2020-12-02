const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names
    .map((name) => name.split(''))
    .reduce((string, array) => string.concat(array), [])
    .filter((letter) => letter.toLowerCase() === 'a').length;
}

assert.deepEqual(containsA(), 20);
