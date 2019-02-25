import React, { Component } from 'react';
import socketConnection from '../../../socket';
import store from 'store2';
import { connect } from 'react-redux';
import { actionSendMessage } from '../../../reducers/globalChat';
import Sidebar from '../../../components/Sidebar/Sidebar';

import './Home.css';
class Home extends Component<any, any> {
  componentDidMount() {
    // socket.connect();
    console.log('HOME DID MOUNT');
    const userFromLocalStorage = store('user');
    socketConnection.emit('user joined', userFromLocalStorage.name);
    // socket.emit('chat message', {
    //   time: Date.now(),
    //   message: `${userFromLocalStorage.name} is connected`,
    // });
  }

  chatBoard = () => {
    console.log(this.props.globalChatReducer.board);
  };

  render() {
    {
      this.chatBoard();
    }
    return (
      <div>
        <Sidebar />
        <button
          onClick={() => {
            this.props.actionSendMessage(Date.now());
          }}
        >
          SAY SOMETHING
        </button>
      </div>
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
  return {
    actionSendMessage: message => dispatch(actionSendMessage(message)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
