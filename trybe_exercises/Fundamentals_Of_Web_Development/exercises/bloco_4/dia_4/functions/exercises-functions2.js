// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let newArray = [2, 3, 6, 7, 10, 100, 1];

function buscarMaior(newArray){
  let maiorIndice = 0;
  for(let index = 1; index < newArray.length; index +=1){
    if(newArray[index] > newArray[maiorIndice]){
      maiorIndice = index;
    }
  }
  return maiorIndice;
}

console.log(buscarMaior(newArray));