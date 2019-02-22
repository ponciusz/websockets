import React, { Component } from 'react';
import { socket } from '../../../subscribeToTimer';

import './Home.css';
class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    // socket.emit("chat message", "componentDidMount");
  }

  send = e => {
    e.preventDefault();
    socket.emit('chat message', this.state.input);
    console.log(this.state.input);
    this.setState({
      input: '',
    });
  };

  updateInput = e => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <ul id="messages" />
        <form onSubmit={this.send}>
          <input value={this.state.input} onChange={e => this.updateInput(e)} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Home;
