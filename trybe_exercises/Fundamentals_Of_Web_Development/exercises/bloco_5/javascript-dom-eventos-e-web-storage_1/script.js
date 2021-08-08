/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function corrige(elements, i, texto){
    document.getElementsByTagName(elements)[i].innerText = texto;
  }
 document.getElementsByTagName("p")[0].innerText = "Henry Aloysius Petre foi um advogado inglês que se tornou no primeiro aviador militar da Austrália e foi membro fundador do Australian Flying Corps (AFC), o predecessor da Real Força Aérea Australiana (RAAF).  Nascido em Essex, Petre abandonou a sua carreira jurídica que ainda estava no início para perseguir o seu interesse pela aviação, construir o seu próprio avião e conseguir um emprego como designer e piloto de aeronaves. Em 1912, ele respondeu ao apelo do Departamento de Defesa da Austrália que recrutava pilotos voluntários para a formação de uma escola de aviação, e assim foi incorporado como tenente nas Forças Militares Australianas.";
 
 function changeColor(elements, cor){
    document.querySelector(elements).style.backgroundColor = cor;
 };

 function upperCase(){  
    let paragrafo = document.getElementsByTagName("p")[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();    
 }

 function pConsole(){
    let paragrafos = document.getElementsByTagName("p");
    for(let i=0; i < paragrafos.length; i+=1){
       console.log(paragrafos[i].innerHTML);
    }
 }
 
 changeColor(".main-content", "rgb(76,164,109)");
 changeColor(".main-content .center-content", "white");
 corrige("h1", 0, "Exercício 5.1 - JavaScript");
 upperCase();
 pConsole();



