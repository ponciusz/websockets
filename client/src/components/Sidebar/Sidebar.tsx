import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";
import Styled from "./Sidebar.styles";

const users = ["User1", "User2", "User3", "User4"];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  // click() {
  //   this.setState({ active: !this.state.active });
  // }
  renderUsers() {
    return users.map((user, index) => {
      return <li>{user}</li>;
    });
  }
  render() {
    return (
      <Styled.Wrapper>
        <Styled.UserListWrapper>
          <Flex>
            <Box width={1 / 1}>
              <Flex className="section-title">
                <Box width={3 / 4}>
                  <h4>Users</h4>
                </Box>
                <Box width={1 / 4}>
                  <span>+</span>
                </Box>
              </Flex>
              <Styled.UserList>{this.renderUsers()}</Styled.UserList>
            </Box>
          </Flex>
        </Styled.UserListWrapper>
        <Styled.RoomListWrapper>
          <Flex>
            <Box width={1 / 1}>
              <Flex className="section-title">
                <Box width={3 / 4}>
                  <h4>Rooms</h4>
                </Box>
                <Box width={1 / 4}>
                  <span>+</span>
                </Box>
              </Flex>
              <Styled.UserList>
                <li>
                  Room1<span>Join</span>
                </li>
                <li>
                  Room2<span>Join</span>
                </li>
                <li>Room2</li>
                <li>Room2</li>
                <li>
                  Room2<span>Join</span>
                </li>
                <li>Room2</li>
                <li>Room2</li>
                <li>Room2</li>
                <li>Room2</li>
              </Styled.UserList>
            </Box>
          </Flex>
        </Styled.RoomListWrapper>
      </Styled.Wrapper>
    );
  }
}

export default Sidebar;
