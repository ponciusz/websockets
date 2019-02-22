import React, { useState } from 'react';
import store from 'store2';

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
    <div className="App">
      <ul id="messages" />
      <form onSubmit={send}>
        <input value={nameField} onChange={e => updateInput(e)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Login;
