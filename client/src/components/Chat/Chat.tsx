import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './Chat.styles';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Flex>
        <Box width={1}>
          <Styled.Wrapper>
            <Styled.ChatBox>adwae</Styled.ChatBox>
            <form>
              <input />
              <button type="submit">Send</button>
            </form>
          </Styled.Wrapper>
        </Box>
      </Flex>
    );
  }
}

export default Chat;
