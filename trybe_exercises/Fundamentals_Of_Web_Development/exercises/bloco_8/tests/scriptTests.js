// const wakeUp = () => 'Acordando!!';
// const coofee = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';

// const doingThings = (func) => func();



// // Ao chamar a função doingThings:
// console.log(doingThings(sleep));

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!

//GABARITO

// Crie uma função que retorne a string 'Acordando!!';
// const wakeUp = () => 'Acordando!!';

// // Crie outra função que retorne a string 'Bora tomar café!!';
// const breakfast = () => 'Bora tomar café!!';

// // Crie mais uma função que retorne a string 'Partiu dormir!!';
// const sleep = () => 'Partiu dormir!!';

// // Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// // para que imprima no console o resultado da execução das funções que você
// // criou nos exemplos anteriores.
// const doingThings = (callback) => {
//   const result = callback();
//   console.log(result);
// };

// doingThings(wakeUp);
// doingThings(breakfast);
// doingThings(sleep);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const isEven2 = numbers.findIndex((number) => number % 2 === 0);

// console.log(isEven2);

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);