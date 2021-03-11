import React, { useState } from 'react';
import GameContext from './GameContext';

function GameProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleActivePlayer = () => setActivePlayer(activePlayer === 1 ? 2 : 1);

  const updateState = (cellClicked) => {
    if (gameBoard[cellClicked] !== 0) return false;
    const newGameBoard = [...gameBoard];
    newGameBoard[cellClicked] = activePlayer;

    toggleActivePlayer();
    setGameBoard(newGameBoard);
  };

  const context = {
    activePlayer,
    setActivePlayer,
    gameBoard,
    setGameBoard,
    updateState,
  };

  return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
}

export default GameProvider;
