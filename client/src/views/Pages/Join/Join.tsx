import React, { Component } from 'react';

import Wrapper from './Join.styles';

class Join extends Component<any, any> {
  render() {
    return (
      <Wrapper>
        <button type="submit">Create</button>
        <button type="submit">Join</button>
      </Wrapper>
    );
  }
}

export default Join;
