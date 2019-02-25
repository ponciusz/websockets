import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";
import Wrapper from "./Login.styles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Flex>
        <Box m="auto" width={1 / 3} px={2}>
          <Wrapper>
            <div>
              <h3>Welcome back!</h3>
              <input />
            </div>
          </Wrapper>
        </Box>
      </Flex>
    );
  }
}

export default Login;
