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
          {room}
          <span>Join</span>
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
              Rooms<span>+</span>
            </Styled.RoomListTitle>
            <Styled.UserList>{this.renderRooms()}</Styled.UserList>
          </Box>
        </Flex>
      </Styled.RoomListWrapper>
    );
  }
}

export default RoomList;
