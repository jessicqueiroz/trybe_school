// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let newArray = [2, 4, 6, 7, 10, 0, -3];

function buscarMaior(newArray){
  let menorIndice = 0;
  for(let index = 1; index < newArray.length; index +=1){
    if(newArray[index] < newArray[menorIndice]){
    menorIndice = index;
  }
  }
  return menorIndice;
}

console.log(buscarMaior(newArray));