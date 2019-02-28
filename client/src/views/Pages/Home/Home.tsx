import React, { Component } from 'react';
import { emit } from '../../../actions/websockets';
import store from 'store2';
import { connect } from 'react-redux';
import Wrapper from './Home.styles';
import { Switch, Route } from 'react-router';
import Game from '../../../components/Game';
import RoomList from '../../../components/Sidebar/RoomList';
import MainMenu from '../../../components/MainMenu';
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
      <Switch>
        <Route path="/" exact component={MainMenu} />
        <Route path="/game" exact component={RoomList} />
        <Route path="/game/:gameID" component={Game} />
      </Switch>
    );
  }
}

{
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
