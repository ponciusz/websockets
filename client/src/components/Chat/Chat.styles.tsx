import styled from 'styled-components';

const Wrapper = styled.div`
  /* background-color: red; */
  margin: auto;
  box-shadow: 0 0 0 1px #d4d4d4;
  width: 75%;
`;

const ChatBox = styled.div`
  /* background: green; */
  max-height: 200px;
  height: 200px;
  overflow-y: scroll;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 2;
  border-width: 1px 0 0 0;
  border-color: #d4d4d4;
`;

export default { Wrapper, ChatBox, Form, Input };
