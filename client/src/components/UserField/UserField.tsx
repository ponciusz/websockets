import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";
import Styled from "./UserField.styles";
class UserField extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Styled.Wrapper>
        <Flex>
          <Box width={1 / 6}>
            <Styled.PlayerNumber>P1</Styled.PlayerNumber>
          </Box>
          <Box width={3 / 6}>
            <Styled.UserName>Claudiu</Styled.UserName>
            <Styled.Points>1600pts</Styled.Points>
          </Box>
          <Box width={2 / 6}>
            <Styled.Avatar />
          </Box>
        </Flex>
      </Styled.Wrapper>
    );
  }
}

export default UserField;
