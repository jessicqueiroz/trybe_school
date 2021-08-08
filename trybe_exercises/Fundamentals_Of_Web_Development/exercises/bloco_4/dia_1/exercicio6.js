//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
//quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
//letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = "QUEEN";
let queen =  "all directions";
let king = "all directions only one square at a time";
let bishop = "diagonals";
let horse = "movement is in the shape of an L";
let pawn = " moves only one square forward";
let tower = "vertically or horizontally";

switch (piece .toLowerCase()) {
  case "queen":
    console.log(queen);
    break;
  case "king":
     console.log(king);
     break;
  case "bishop":
     console.log(bishop);
     break;
  case "horse":
    console.log(horse);
    break;
  case "pawn":
    console.log(pawn);
    break;
  case "tower":
   console.log(tower);
   break;
  default: 
    console.log("Peça inválida!"); 
}