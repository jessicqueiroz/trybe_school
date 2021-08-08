const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const string =  names.reduce((acc, curr) =>
    acc + curr.split('').reduce((accumulator, current) => {
      if (current === 'a' || current === 'A') return accumulator + 1;
      return accumulator;
    }, 0), 0);
    return string;
}

console.log(names[0].split(''));
assert.deepStrictEqual(containsA(), 20);