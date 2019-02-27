import React, { Component } from 'react';
import { emit } from '../../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';
import Wrapper from './Home.styles';
interface HomeProps {
  history: any;
}
class Home extends Component<HomeProps> {
  // constuctor() {
  //   this.createPage = this.createPage.bind(this);
  //   this.joinPage = this.joinPage.bind(this);
  // }
  componentDidMount() {
    const userFromLocalStorage = store('user');
    emit('USER_JOINED', userFromLocalStorage.name);
  }

  // createPage() {
  //   const path = '/Create';
  //   this.props.history.push(path);
  // }
  // joinPage() {
  //   const path = '/Join';
  //   this.props.history.push(path);
  // }

  render() {
    return (
      <Wrapper>
        <button>Create</button>
        <button>Join</button>
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
