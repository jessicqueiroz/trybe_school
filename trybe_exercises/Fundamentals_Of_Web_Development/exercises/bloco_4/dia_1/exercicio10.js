// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
// o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de 
// lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de 
// entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, 
// sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custo = 70;
let valVenda = 100;


let custoTotal = 0;
let lucro = 0;
const imposto = 20;

custoTotal = ((custo * imposto)/100) + custo;
lucro = (valVenda - custoTotal) * 1000;

if (custo > 0 && valVenda > 0) {
  console.log("A empresa terá", lucro, "de lucro, ao vender 1000 produtos.");
} else console.log("Você entrou com algum valor inválido.");

