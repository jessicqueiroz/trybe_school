const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
  let newWords = [];
  for (let index = 0; index < words.length; index += 1) {
    let qLength = 0;
    qLength = words[index].split('').length;
    newWords.push(qLength);
  }
  return newWords;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);