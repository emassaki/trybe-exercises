const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      }
      const messageError = 'Nenhum animal com esse nome!';
      return reject(messageError);
    }, 100);
  });
};

const getAnimal = (name) => {
  return findAnimalByName(name).then((animal) => animal);
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsWithAge = Animals.filter((animal) => animal.age === age);
      if (animalsWithAge.length !== 0) {
        return resolve(animalsWithAge);
      }
      const messageError = 'Nenhum animal com essa idade!';
      return reject(messageError);
    }, 100);
  });
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then((animal) => animal);
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array com os animais', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(1)).resolves.toEqual([
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
      ]);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(10)).rejects.toBe('Nenhum animal com essa idade!');
    });
  });
});
