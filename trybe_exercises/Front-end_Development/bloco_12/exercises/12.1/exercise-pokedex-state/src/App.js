import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [...pokemons],
      index: 0,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filteredPokemon = this.filteredPokemon.bind(this);
    this.allpokemons = this.allpokemons.bind(this);
  }

  nextPokemon() {
    this.setState((prevState) => ({
      index: prevState.index + 1
    }), () => console.log(this.state.index));
    if (this.state.index === this.state.list.length - 1 ) {
      this.setState( {index: 0} );
    }
  }

  filteredPokemon(type) {
    console.log(this.state.list)
    const pokemonsList = pokemons.filter((pokemon) => pokemon.type === type);
    this.setState( { list: pokemonsList } );
  }

  allpokemons() {
    console.log(this.state.list)
    this.setState(({
      list: pokemons,
    }));
  }


  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <section>
          <Pokemon pokemon={this.state.list[this.state.index]} />
        </section>
        <button
          type='button'
          onClick={this.allpokemons}
        >
          All Pokemons
        </button>
        <button 
          type='button'
          onClick={ () => this.filteredPokemon ('Psychic') }
        > Psychic
        </button>
        <button 
          type='button'
          onClick={ () => this.filteredPokemon ('Fire') }
        > Fire
        </button>
        <button 
          className='btnNext'
          type='button'
          onClick={ this.nextPokemon }
        >
          Next P0K3M0N
        </button>
      </div>
    );
  }
}

export default App;