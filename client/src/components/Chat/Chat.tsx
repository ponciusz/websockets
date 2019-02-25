import React, { useState } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './Chat.styles';
import { emit } from '../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';

const Chat = props => {
  const [input, updateInput] = useState('');

  const sendMessage = () => {
    const user = store('user').name;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    emit('SEND_MESSAGE', `${time} - ${user}: ${input}`);
    updateInput('');
  };

  const chatBoard = () => {
    return props.globalChatReducer.board.map((msg, index) => {
      return <li key={index}>{msg}</li>;
    });
  };

  return (
    <Flex>
      <Box width={1}>
        <Styled.Wrapper>
          <Styled.ChatBox>
            <ul>{chatBoard()}</ul>
          </Styled.ChatBox>
          <form onSubmit={sendMessage}>
            <input
              value={input}
              onChange={e => {
                updateInput(e.target.value);
              }}
            />
            <button type="submit">Send</button>
          </form>
        </Styled.Wrapper>
      </Box>
    </Flex>
  );
};

// CONNECT PROPS AND DISPATCHERS
const mapStateToProps = state => {
  return {
    globalChatReducer: state.globalChatReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
