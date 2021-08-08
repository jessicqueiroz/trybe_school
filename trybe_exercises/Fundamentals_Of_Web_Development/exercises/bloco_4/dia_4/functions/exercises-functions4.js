// Crie uma função que receba um array de nomes e retorne o nome com a maior 
//quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let newArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Jeiasndaksdbajsdbhakjdsba', 'Cairo', 'Joana'];

function buscarMaior(newArray){
  let nome = [];
  let tamanho = 0;
  let maiorNome = 0;
  let imprime = '';
  for(let index = 0; index < newArray.length; index +=1){
    nome = newArray[index].split('');
    tamanho = nome.length;
    if(tamanho > maiorNome){
      maiorNome = tamanho;
      imprime = newArray[index];
    }
  } return imprime;
}
console.log(buscarMaior(newArray));