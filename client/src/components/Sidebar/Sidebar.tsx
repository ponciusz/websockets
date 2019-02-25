import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './Sidebar.styles';
import UserList from './UserList/UserList';
import RoomList from './RoomList/RoomList';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Wrapper>
        <UserList />
        <RoomList />
      </Styled.Wrapper>
    );
  }
}

export default Sidebar;
