import React from 'react';

const Game = props => {
  return <div>GAME: {props.match.params.gameID}</div>;
};

export default Game;
