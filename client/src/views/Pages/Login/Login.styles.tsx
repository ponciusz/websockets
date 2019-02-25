import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: linear-gradient(to bottom right, #6e6e6e, yellow); */
`;

const Container = styled.div`
  width: 680px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.4);
  padding: 20px 0;
`;

const Title = styled.div`
  /* background: #7fdbff; */
  padding: 10px 0;
  text-align: center;
  color: black;
  font-weight: 600;
  font-size: 24px;
`;
const Input = styled.input`
  font-size: 16px;
  color: #4b2354;
  line-height: 1.2;
  display: block;
  width: 100%;
  background: 0 0;
  margin: 20px 0;
`;

const FormButton = styled.button`
  background: black;
  color: white;
  padding: 10px;
  box-shadow: 0;
  border: 1px solid black;
  border-radius: 5px;
`;

export default {
  Wrapper,
  Container,
  Title,
  Input,
  FormButton,
};
