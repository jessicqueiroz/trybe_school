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

//1
const morningShift = (object, key, value) => {
  object[key] = value;
};

morningShift(lesson2, 'turno', 'manhã');

//2
const listKeys = (object) => Object.keys(object);

//3
const lengthList = (object) => Object.keys(object).length;

//4 
const objValues = (object) => Object.values(object);

//5
