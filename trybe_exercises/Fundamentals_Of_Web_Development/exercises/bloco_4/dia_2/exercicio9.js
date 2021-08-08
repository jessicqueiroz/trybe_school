// let numbers = [2, 4, 6];
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index] / 2);
// };

let array = [];

for (let index = 1; index < 26; index += 1){
  array.push(index)
}

for (let div of array){
  div = div / 2;
  console.log(div);
}

