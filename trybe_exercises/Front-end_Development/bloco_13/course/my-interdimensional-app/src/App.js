import React, { Component }from 'react';
import './App.css';

class App extends Component {
  //1 - definindo estado inicial
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }
  //2 - fazendo a requisição
  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }
  // Aquele velho problema do código ser lido antes da API retornar ataca novamente, mas nada tema, porque com o componentDidMount não há problema!
  //devemos chamar a função fetch dentro do componentDidMount ela garante que o retorno da api será recebido antes do código ser lido
  componentDidMount() {
    this.fetchCharacters();
  }

  //3 - renderizando um título na página
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;