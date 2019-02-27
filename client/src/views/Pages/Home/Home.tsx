import React, { Component } from 'react';
import { emit } from '../../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';
import Game from '../../../components/Game/Game';
import Chat from '../../../components/Chat/Chat';
import Wrapper from './Home.styles';

class Home extends Component<any, any> {
  componentDidMount() {
    const userFromLocalStorage = store('user');
    emit('USER_JOINED', userFromLocalStorage.name);
  }

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
