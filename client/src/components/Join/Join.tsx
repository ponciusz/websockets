import React, { Component } from 'react';
import RoomList from '../../components/Sidebar/RoomList';
import { Box } from '@rebass/grid';
import Wrapper from './Join.styles';

class Create extends Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Box width={1 / 2}>
          <RoomList />
        </Box>
      </Wrapper>
    );
  }
}

export default Create;
