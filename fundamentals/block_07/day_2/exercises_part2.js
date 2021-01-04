const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercise 1
const addShift = (obj, key, value) => (obj[key] = value);
addShift(lesson2, 'turno', 'manhã');

// exercise 2
const objKeys = (obj) => Object.keys(obj);

// exercise 3
const objLen = (obj) => Object.values(obj).length;

// exercise 4
const objVal = (obj) => Object.values(obj);

// exercise 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// exercise 6
const total = (obj) => {
  let sum = 0;
  for (let lesson in obj) {
    sum += obj[lesson].numeroEstudantes;
  }
  return sum;
};

// exercise 7
const getValueByNumber = (obj, num) => Object.values(obj)[num];

// exercise 8
const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  let isPair = false;
  for (let pair in pairs) {
    if (pairs[pair][0] == key && pairs[pair][1] == value) {
      isPair = true;
    }
  }
  return isPair;
};

// bonus exercise 1
const totalSubject = (obj, subject) => {
  let sum = 0;
  for (let lesson in obj) {
    if (obj[lesson].materia.includes(subject)) {
      sum += obj[lesson].numeroEstudantes;
    }
  }
  return sum;
};

// bonus exercise 2
const totalProf = (obj, professor) => {
  let sum = 0;
  let prof = {};
  let aulas = [];
  for (let lesson in obj) {
    if (obj[lesson].professor.includes(professor)) {
      aulas.push(obj[lesson].materia);
      sum += obj[lesson].numeroEstudantes;
    }
  }
  prof.professor = professor;
  prof.aulas = aulas;
  prof.estudantes = sum;
  return prof;
};
