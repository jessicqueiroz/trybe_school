const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArray = [];
  for (const person in people) {
    let frase = '';
    frase = `${greeting}${people[person]}`;
    newArray.push(frase);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);