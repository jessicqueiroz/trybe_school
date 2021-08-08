// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring, ...numbers];
// console.log(months);

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'abacaxi', 'mamao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['agua', 'suco de laranja', 'açúcar'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salada = [...specialFruit, ...additionalItens];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

console.log(Object.keys(product)[0]);

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [string, printf] = saudacoes;
printf(string);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,,...numerosPares] = numerosPares;
console.log(numerosPares);

const getNationality = ({ firstName, nationality }) => {
   if(!nationality) {
     const { nationality = 'Brazilian' } = person;
    return `${firstName} is ${nationality}`;
   }
   return `${firstName} is ${nationality}`;
}

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => number * value;

console.log(multiply(8, 2));