import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './UserList.styles';
import { connect } from 'react-redux';

class UserList extends Component<any, any> {
  constructor(props) {
    super(props);
  }
  renderUsers() {
    const { online } = this.props.onlineUsersReducer;
    if (Object.keys(online)) {
      return Object.keys(online).map((id: any, index) => {
        return <li key={index}>{online[id].name}</li>;
      });
    }
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

// CONNECT PROPS AND DISPATCHERS
const mapStateToProps = state => {
  return {
    onlineUsersReducer: state.onlineUsersReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
