import React, { Component } from 'react';
import RoomList from '../../../components/Sidebar/RoomList/RoomList';
import Wrapper from './Join.styles';

class Join extends Component<any, any> {
  render() {
    return (
      <Wrapper>
        <RoomList />
      </Wrapper>
    );
  }
}

export default Join;
