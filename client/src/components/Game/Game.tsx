import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './Game.styles';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Wrapper>
        <Styled.UserContainer>
          <Styled.UserItem>User1</Styled.UserItem>
          <Styled.UserItem>User2</Styled.UserItem>
          <Styled.UserItem>User3</Styled.UserItem>
          <Styled.UserItem>User4</Styled.UserItem>
        </Styled.UserContainer>
      </Styled.Wrapper>
    );
  }
}

export default Game;
