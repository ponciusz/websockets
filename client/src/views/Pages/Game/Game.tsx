import React from 'react';
import { emit } from '../../../actions/websockets';

class Game extends React.Component<any, any> {
  componentDidMount() {
    emit('JOIN_ROOM', this.props.match.params.gameID);
  }
  render() {
    return <div>GAME: {this.props.match.params.gameID}</div>;
  }
}

export default Game;
