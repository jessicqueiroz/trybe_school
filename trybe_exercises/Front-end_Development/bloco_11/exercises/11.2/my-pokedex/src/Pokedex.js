import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  renderPokemons(pokemon) {
    return (
      <li key={pokemon.name}></li>
    );
  }
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;