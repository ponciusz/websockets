import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import Styled from './RoomList.styles';
import { emit } from '../../../actions/websockets';
import history from '../../../history';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

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
          <Flex>
            <Box width={5 / 6}> {open[key].createdBy}</Box>
            <Box width={1 / 6}>2/4</Box>
            <Box width={1 / 6} mx="auto">
              <button
                title={key}
                onClick={() => {
                  history.push(`/game/${key}`);
                }}
              >
                Join
              </button>
            </Box>
          </Flex>
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
