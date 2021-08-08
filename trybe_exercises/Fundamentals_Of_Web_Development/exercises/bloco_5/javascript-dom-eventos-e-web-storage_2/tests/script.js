let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Pai você foi meu herói meu bandido.';

const primeiroFilho = document.getElementById('pai').firstElementChild;
console.log(primeiroFilho);

const primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilho2);

const atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(atencao);

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);

