const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope); 
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const funcaoCrescente = (array) => {
    for (let index = 1; index < array.length; index += 1) {
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
        if (array[index] < array[secondIndex]) {
          let maiorNumero = array[index];
          array[index] = array[secondIndex];
          array[secondIndex] = maiorNumero;
        }
      } 
    } console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}

funcaoCrescente(oddsAndEvens);