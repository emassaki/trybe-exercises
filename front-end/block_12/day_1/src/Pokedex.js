import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonIndex: 0,
      pokemonType: 'All'
    }
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  pokemonTypeFilter(typeFilter) {
    this.setState({
      pokemonIndex: 0,
      pokemonType: typeFilter
    })
  }

  filterPokemonsByType() {
    const { pokemons } = this.props;
    const { pokemonType } = this.state;

    return pokemons.filter(pokemon => {
      if (this.state.pokemonType === 'All') return true;
      return pokemon.type === pokemonType;
    })
  }

  getAllPokemonsTypes() {
    const { pokemons } = this.props;
    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const arrayOfPokemons = this.filterPokemonsByType();
    const pokemonsTypes = this.getAllPokemonsTypes();
    const pokemon = arrayOfPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.pokemonTypeFilter('All')}
            className="filter-button"
          >
            All
        </Button>
          {pokemonsTypes.map(type =>
            <Button
              onClick={() => this.pokemonTypeFilter(type)}
              key={type}
              className="filter-button"
            >
              {type}
            </Button>)}
        </div>
        <Button
          onClick={() => this.nextPokemon(arrayOfPokemons.length)}
          className="pokedex-button"
          disabled={arrayOfPokemons.length <= 1}
        >
          Próximo Pokemon
        </Button>
      </div>
    );
  }
}

export default Pokedex;