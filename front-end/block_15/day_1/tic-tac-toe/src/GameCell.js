import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

class GameCell extends React.Component {
  render() {
    const { id, playerId, updateGameBoard } = this.props;

    if (playerId === 1) {
      return (
        <div
          data-testid={`cell_${id}`}
          className="game-cell"
          onClick={() => updateGameBoard(id)}
        >
          <img src={xImage} alt='X' data-testid={`cell_${id}_image`} />
        </div>
      )
    }

    if (playerId === 2) {
      return (
        <div
          data-testid={`cell_${id}`}
          className="game-cell"
          onClick={ () => updateGameBoard(id) }
        >
          <img src={oImage} alt='O' data-testid={`cell_${id}_image`} />
        </div>
      )
    }

    return (
      <div data-testid={`cell_${id}`} className="game-cell" onClick={() => updateGameBoard(id)}/>
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  playerId: PropTypes.number.isRequired,
  updateGameBoard: PropTypes.func.isRequired,
}

export default GameCell;
