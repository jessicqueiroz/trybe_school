// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true



function verificaPalindrome(string) {
  let array = string.split('');  
  let contrario = [];  
  let contador = 0;
  for(let index=(array.length-1); index >=0; index -=1){
    contrario.push(array[index]);    
  }
  for(let i=0; i < array.length; i+=1){
    if(array[i] === contrario [i]){
      contador +=1;
    }
  }
  if(contador === array.length){
    return true;
  } else return false;
}
console.log(verificaPalindrome('arara'));

