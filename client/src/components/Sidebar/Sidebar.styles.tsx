import styled, { css } from 'styled-components';

const hide = css`
  margin-right: -480px;
  transition: margin-right 0.5s;
`;
const Wrapper = styled.div`
  width: 200px;
  /* position: fixed; */
  right: 0;
  margin-right: 0px;
  height: 100vh;
  background: white;
  margin-top: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  background: white;
  h4 {
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Rubik;
  }
`;

export default { Wrapper };
