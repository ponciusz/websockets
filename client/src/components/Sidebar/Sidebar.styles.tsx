import styled, { css } from "styled-components";

const hide = css`
  margin-right: -480px;
  transition: margin-right 0.5s;
`;
const Wrapper = styled.div`
  width: 200px;
  position: fixed;
  right: 0;
  margin-right: 0px;
  height: 100vh;
  background: white;
  margin-top: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  background: white;
  .section-title {
    background: red;
    padding: 10px;
  }
  h4 {
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Rubik;
  }
`;
const UserList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
  margin-top: 0.3em;
  overflow-y: scroll;
  font-family: Rubik;
  font-size: 14px;

  li {
    padding: 8px 5px;
    border-bottom: 1px solid #b4b4b4;
    padding-left: 20px;
    span {
      background: green;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 10px;
      color: white;
      float: right;
    }
  }
`;
const UserListWrapper = styled.div`
  height: 70vh;
  ${UserList} {
    height: 60vh;
  }
`;
const RoomListWrapper = styled.div`
  height: 30vh;
  ${UserList} {
    height: 20vh;
  }
`;

export default { Wrapper, UserList, UserListWrapper, RoomListWrapper };
