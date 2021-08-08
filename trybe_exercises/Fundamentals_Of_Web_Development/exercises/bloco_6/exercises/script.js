function states() {
  const selectedStates = document.getElementById('input-state');
  const arrayOfStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
  for (let i = 0; i < arrayOfStates.length; i += 1){
    const newOption = document.createElement('option');
    newOption.innerText = arrayOfStates[i];
    selectedStates.appendChild(newOption);
    selectedStates.appendChild(newOption).value = arrayOfStates[i];
  }
}

window.onload = function() {
  states();
};

function cpf() {
  const cpf = document.querySelector("#input-cpf");
  cpf.addEventListener("blur", () => {
    let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
    cpf.value = value;
  });
}

cpf();