import React, { Component } from 'react';
import { socket } from '../../../socket';
import store from 'store2';

import './Home.css';
class Home extends Component<any, any> {
  componentDidMount() {
    // socket.connect();

    const userFromLocalStorage = store('user');
    socket.emit('user joined', userFromLocalStorage.name)
    // socket.emit('chat message', {
    //   time: Date.now(),
    //   message: `${userFromLocalStorage.name} is connected`,
    // });
  }

  render() {
    return <div>HOMEPAGE</div>;
  }
}

export default Home;
