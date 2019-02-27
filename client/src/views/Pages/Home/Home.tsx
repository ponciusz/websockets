import React, { Component } from 'react';
import { emit } from '../../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';
import Wrapper from './Home.styles';
import RoomList from '../../../components/Sidebar/RoomList/RoomList';
class Home extends Component<any, any> {
  componentDidMount() {
    const userFromLocalStorage = store('user');
    emit('USER_JOINED', userFromLocalStorage.name);
  }

  render() {
    return (
      <Wrapper>
        <RoomList />
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
