const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};


// implemente seus testes aqui
assert.notDeepStrictEqual(obj1.title, obj3.title);
assert.notDeepStrictEqual(obj2.title, obj3.title);
assert.notDeepStrictEqual(Object.values(obj1), Object.values(obj2));

//OU SIMPLESMENTE ---->
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);

