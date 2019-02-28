import React, { Component } from 'react';
import Wrapper from './MainMenu.styles';
class MainMenu extends Component<any, any> {
  constructor(props) {
    super(props);
    this.createPage = this.createPage.bind(this);
    this.joinPage = this.joinPage.bind(this);
  }
  createPage() {
    const path = '/game/:gameID';
    this.props.history.push(path);
  }
  joinPage() {
    const path = '/game';
    this.props.history.push(path);
  }
  render() {
    return (
      <Wrapper>
        <button onClick={this.createPage}>Create</button>
        <button onClick={this.joinPage}>Join</button>
      </Wrapper>
    );
  }
}
export default MainMenu;
