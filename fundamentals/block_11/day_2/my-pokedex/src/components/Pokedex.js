import React from 'react';

import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props
    return (
      <section className="pokedex">
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </section>
    );
  }
}

export default Pokedex;
