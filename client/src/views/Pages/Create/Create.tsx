import React, { Component } from 'react';
import Game from '../../../components/Game/Game';
import Chat from '../../../components/Chat/Chat';

import Wrapper from './Create.styles';

class Create extends Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Game />
        <Chat />
        <button>Back</button>
      </Wrapper>
    );
  }
}

export default Create;
