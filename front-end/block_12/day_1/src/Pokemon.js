import React from 'react';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {id, name, type, averageWeight, image} = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>#{id}</p>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;