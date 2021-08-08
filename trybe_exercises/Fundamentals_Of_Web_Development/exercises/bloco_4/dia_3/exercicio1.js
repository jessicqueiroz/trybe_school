// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

let n = 3;

let symbol = '*';
let inputLine = '';

if(n > 1){
  for (i=0; i < n; i +=1){
    inputLine += symbol;
  }
  
  for(i=0; i < n; i+=1){
    console.log(inputLine);
  }
} else console.log("Insira um n > 1 e tente novamente.");


