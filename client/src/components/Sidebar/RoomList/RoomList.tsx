import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './RoomList.styles';
const rooms = [
  'Room1',
  'Room2',
  'Room3',
  'Room4',
  'Room5',
  'Room6',
  'Room7',
  'Room8',
  'Room9',
];
class RoomList extends Component {
  constructor(props) {
    super(props);
  }
  renderRooms() {
    return rooms.map((room, index) => {
      return (
        <li key={index}>
          <Flex>
            <Box width={5 / 6}>{room}</Box>
            <Box width={1 / 6}>2/4</Box>
            <Box width={1 / 6} mx="auto">
              <button>Join</button>
            </Box>
          </Flex>
        </li>
      );
    });
  }
  render() {
    return (
      <Styled.RoomListWrapper>
        <Flex>
          <Box width={1 / 1}>
            <Styled.RoomListTitle>
              <Flex>
                <Box width={5 / 6}>Rooms</Box>
                <Box width={1 / 6}>Players</Box>
                <Box width={1 / 6} />
              </Flex>
            </Styled.RoomListTitle>
            <Styled.UserList>{this.renderRooms()}</Styled.UserList>
          </Box>
        </Flex>
      </Styled.RoomListWrapper>
    );
  }
}

export default RoomList;
