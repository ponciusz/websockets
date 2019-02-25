import React, { useState } from 'react';
import store from 'store2';
import { Flex, Box } from '@rebass/grid';
import Styled from './Login.styles';
interface LoginProps {
  history: any;
}

const Login: React.FC<LoginProps> = props => {
  const [nameField, updateNameField] = useState('');

  const send = e => {
    e.preventDefault();
    console.log('Your name is: ' + nameField);
    store('user', {
      name: nameField,
    });
    props.history.push('/');
  };

  const updateInput = e => {
    updateNameField(e.target.value);
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Box width={1}>
          <Styled.Title>Welcome back!</Styled.Title>
          <Box width={3 / 4} mx="auto">
            <form onSubmit={send}>
              <Styled.Input
                id="username"
                value={nameField}
                onChange={e => updateInput(e)}
                placeholder="Username"
              />

              <Styled.Input placeholder="Password" id="password" />
              <Styled.FormButton type="submit">Login</Styled.FormButton>
            </form>
          </Box>
        </Box>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Login;
