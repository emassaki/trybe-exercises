import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1, // Jogador 1 e 2
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.updateGameBoard = this.updateGameBoard.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  changePlayer() {
    const { activePlayer } = this.state;
    this.setState({
      activePlayer: activePlayer === 1 ? 2 : 1,
    })
  }

  updateGameBoard(id) {
    this.setState((state) => {
      const newBoard = [...state.gameBoard];
      let nextActivePlayer = state.activePlayer;
      if (state.gameBoard[id] === 0) {
        newBoard[id] = nextActivePlayer;
        nextActivePlayer = this.changePlayer();
      } else {
        newBoard[id] = state.gameBoard[id];
      }
      return {
        gameBoard: newBoard,
        activePlayer: nextActivePlayer,
      }
    });
  }

  winConditionLines(gameBoard) {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i]
    }
    return false;
  }

  winConditionColumn(gameBoard) {
    for (let i = 0; i <= 1; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3]
        && gameBoard[i + 3] === gameBoard[i + 6]
        && gameBoard[i] !== 0
      ) return gameBoard[i]
    }
    return false;
  }

  winConditionDiagonal(gameBoard) {
    if (gameBoard[4] === 0) return;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) return gameBoard[0];
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) return gameBoard[2];
    return false;
  }

  victoryAchieved() {
    const { gameBoard } = this.state;
    return (
      this.winConditionLines(gameBoard)
      || this.winConditionColumn(gameBoard)
      || this.winConditionDiagonal(gameBoard)
    )
  }

  resetBoard() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    })
  }

  renderButton() {
    return (
      <button type='button' onClick={this.resetBoard}>Reiniciar</button>
    )
  }

  render() {
    const { gameBoard } = this.state;
    const win = this.victoryAchieved();
    if (!gameBoard.includes(0)) {
      return (
        <>
          <h1>Fim de Jogo</h1>
          {this.renderButton()}
          <h3>Empate</h3>
        </>
      )
    }
    return (
      <>
        <h1>Fim de Jogo</h1>
        {this.renderButton()}
        {
          !win
            ? (<GameBoard
              gameState={gameBoard}
              updateGameBoard={this.updateGameBoard}
            />)
            : <h1>{`Player ${win === 1 ? 'X' : 'O'} ganhou`}</h1>
        }
      </>
    );
  }
}

export default TicTacToe;
