// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;
let salarioLiquido = 0;
let valorIR = 0;
let salarioBase = 0;

if (salarioBruto <= 1555.94){
  salarioBase = salarioBruto - ((8*salarioBruto) / 100);
} else if (salarioBruto >= 1555.95 && salarioBruto <= 2594.92){
  salarioBase = salarioBruto - ((9*salarioBruto) / 100);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioBase = salarioBruto - ((11*salarioBruto) / 100);
} else salarioBase = salarioBruto - 570,88;

if (salarioBase <= 1903.98) {
  valorIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  valorIR = ((7.5 * salarioBase) / 100) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  valorIR = ((15 * salarioBase) / 100) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    valorIR = ((22.5 * salarioBase) / 100) - 636.13;
} else valorIR = ((27.5 * salarioBase) / 100) - 869.36;

salarioLiquido = salarioBase - valorIR;


console.log(salarioBase);
console.log(valorIR);
console.log(salarioLiquido);
