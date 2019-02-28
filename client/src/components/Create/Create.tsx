import React, { Component } from 'react';
import Game from '../../components/Game/Game';
import Chat from '../../components/Chat/Chat';

import Wrapper from './Create.styles';

class Create extends Component<any, any> {
  constructor(props) {
    super(props);
    this.backButton = this.backButton.bind(this);
  }
  backButton() {
    const path = '/';
    this.props.history.push(path);
  }
  render() {
    return (
      <Wrapper>
        <Game />
        <Chat />
        <button onClick={this.backButton}>Back</button>
      </Wrapper>
    );
  }
}

export default Create;
