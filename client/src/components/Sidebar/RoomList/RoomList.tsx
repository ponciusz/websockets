import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './RoomList.styles';
import { emit } from '../../../actions/websockets';
import history from '../../../history';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

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
class RoomList extends Component<any, any> {
  constructor(props) {
    super(props);
  }
  renderRooms() {
    const { open } = this.props.openGames;
    if (!open) {
      return;
    }
    return Object.keys(open).map((key, index) => {
      return (
        <li key={index}>
          {open[key].createdBy}
          <button
            title={key}
            onClick={() => {
              history.push(`/game/${key}`);
            }}
          >
            Join
          </button>
        </li>
      );
    });
  }

  createGame = () => {
    const gameId = uuidv1();
    emit('GAME_CREATED', gameId);
    history.push(`/game/${gameId}`);
    // redirect to website/games/${id}
  };

  render() {
    return (
      <Styled.RoomListWrapper>
        <Flex>
          <Box width={1 / 1}>
            <Styled.RoomListTitle>
              Rooms <button onClick={this.createGame}>+</button>
            </Styled.RoomListTitle>
            <Styled.UserList>{this.renderRooms()}</Styled.UserList>
          </Box>
        </Flex>
      </Styled.RoomListWrapper>
    );
  }
}

// CONNECT PROPS AND DISPATCHERS
const mapStateToProps = state => {
  return {
    openGames: state.openGamesReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
