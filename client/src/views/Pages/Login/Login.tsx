import React, { useState } from 'react';
import store from 'store2';
import { Flex, Box } from '@rebass/grid';
import Wrapper from './Login.styles';
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
    <Flex>
      <Box m="auto" width={1 / 3} px={2}>
        <Wrapper>
          <div>
            <h3>Welcome back!</h3>
            <form onSubmit={send}>
              <input value={nameField} onChange={e => updateInput(e)} />
              <button type="submit">Send</button>
            </form>
          </div>
        </Wrapper>
      </Box>
    </Flex>
  );
};

export default Login;
