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

const newLesson2 = (obj, key, value) => {
  obj[key] = value;
};
newLesson2(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson3));

const showValues = (obj) => Object.values(obj);
console.log(showValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const sumStudents = (obj) => {
  let total = 0;
  const getObj = Object.keys(obj);
  for (let index in getObj) {
    total += obj[getObj[index]].numeroEstudantes;
  }
  return total;
}
console.log(sumStudents(allLessons));

const keyValue = (obj, index) => Object.values(obj)[index];
console.log(keyValue(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
