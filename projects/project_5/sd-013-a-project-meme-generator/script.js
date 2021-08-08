function inputNaTela() {
  const inputValue = document.getElementById('text-input').value; 
  const divText = document.querySelector('#meme-text');
  const input = document.querySelector('#text-input'); 
  divText.innerHTML = inputValue;
}

inputNaTela();