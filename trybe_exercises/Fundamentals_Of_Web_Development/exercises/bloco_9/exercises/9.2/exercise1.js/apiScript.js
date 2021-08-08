// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(respose => respose.json())
    .then(({ joke }) => addTextDom(joke));
};

const addTextDom = (text) => document.getElementById('jokeContainer').innerHTML = text;

window.onload = () => fetchJoke();