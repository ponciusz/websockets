import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 400px;
  width: 500px;
  box-shadow: 0 0 0 1px gray;
  border-radius: 5px;
`;

const Title = styled.div`
  background: red;
  padding: 10px 0;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 24px;
`;

const Input = styled.input`
  border-width: 0 0 1px 0;
  border-color: black;
  width: 100%;
  margin: 20px 0;
`;

const InputLabel = styled.label`
  color: black;
`;

export default { Wrapper, Container, Title, Input, InputLabel };
