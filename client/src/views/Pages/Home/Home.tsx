import React, { Component } from 'react';
import { emit } from '../../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';

import Sidebar from '../../../components/Sidebar/Sidebar';
import Chat from '../../../components/Chat/Chat';
import { Flex, Box } from '@rebass/grid';

import './Home.css';

class Home extends Component<any, any> {
  componentDidMount() {
    const userFromLocalStorage = store('user');
    // emit('USER_JOINED', userFromLocalStorage.name);
  }

  chatBoard = () => {
    return this.props.globalChatReducer.board.map((msg, index) => {
      return <li key={index}>{msg}</li>;
    });
  };

  sendMessage = message => {
    const userFromLocalStorage = store('user');
    emit('SEND_MESSAGE', message + ' - ' + userFromLocalStorage.name);
  };

  render() {
    {
      this.chatBoard();
    }
    return (
      <Flex>
        <Box width={1}>
          <Chat />
          <button
            onClick={() => {
              this.sendMessage(Date.now());
            }}
          >
            SAY SOMETHING
          </button>
        </Box>
        <Sidebar />
      </Flex>
    );
  }
}

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
)(Home);
