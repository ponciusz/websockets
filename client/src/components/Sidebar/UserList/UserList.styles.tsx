import styled, { css } from 'styled-components';

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
const UserListTitle = styled.div`
  background: red;
  padding: 10px;
  flex-grow: 1;
  font-weight: 600;
`;

export default { UserList, UserListWrapper, UserListTitle };
