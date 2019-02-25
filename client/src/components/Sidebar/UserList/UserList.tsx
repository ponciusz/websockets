import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './UserList.styles';

const users = ['User1', 'User2', 'User3', 'User4'];
class UserList extends Component {
  constructor(props) {
    super(props);
  }
  renderUsers() {
    return users.map((user, index) => {
      return <li key={index}>{user}</li>;
    });
  }

  render() {
    return (
      <Styled.UserListWrapper>
        <Flex>
          <Box width={1 / 1}>
            <Flex className="section-title">
              <Styled.UserListTitle>Users</Styled.UserListTitle>
            </Flex>

            <Styled.UserList>{this.renderUsers()}</Styled.UserList>
          </Box>
        </Flex>
      </Styled.UserListWrapper>
    );
  }
}

export default UserList;
