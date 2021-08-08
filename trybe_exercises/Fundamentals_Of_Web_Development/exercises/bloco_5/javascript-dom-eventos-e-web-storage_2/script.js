const title = document.createElement('h1');
title.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(title);
title.classList.add('title');

const divMainContent = document.createElement('div');
divMainContent.classList.add('main-content');
document.body.appendChild(divMainContent);

const divCenterContent = document.createElement('div');
divCenterContent.classList.add('center-content');
divMainContent.appendChild(divCenterContent);

const paragrafo = document.createElement('p');
divCenterContent.appendChild(paragrafo).innerHTML = 'Aqui é o parágrafo filho de div .center-content';

const divLeftContent = document.createElement('div');
divLeftContent.classList.add('left-content');
divMainContent.appendChild(divLeftContent);

const divRightContent = document.createElement('div');
divRightContent.classList.add('right-content');
divMainContent.appendChild(divRightContent);

const imagem = document.createElement('img');
imagem.classList.add('small-image');
imagem.src = 'https://picsum.photos/200';
divLeftContent.appendChild(imagem);

const valoresList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
const list = document.createElement('ul');
divRightContent.appendChild(list);

for(let num in valoresList){
  const elementLi = document.createElement('li');
  elementLi.innerHTML = valoresList[num];
  list.appendChild(elementLi);
};

for(let i=1; i <= 3; i+=1){
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Elemento ' + i;
  divMainContent.appendChild(elementH3);
  elementH3.classList.add('description');
};

divMainContent.removeChild(divLeftContent);

divRightContent.style.marginRight = "auto";

divCenterContent.style.backgroundColor = "green";

list.lastChild.remove();
list.lastChild.remove();
