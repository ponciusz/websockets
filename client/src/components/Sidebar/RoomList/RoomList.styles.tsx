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
    div:nth-child(2) {
      text-align: center;
    }
    div:nth-child(3) > span {
      background: green;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 10px;
      color: white;
      float: right;
      margin-right: 10px;
      text-align: center;
    }
  }
`;
const RoomListWrapper = styled.div`
  box-shadow: 0 0 0 1px #d4d4d4;
  ${UserList} {
    height: 400px;
  }
`;
const RoomListTitle = styled.div`
  background: #7fdbff;
  padding: 10px 0 10px 20px;
  flex-grow: 1;
  font-weight: 600;
  span {
    float: right;
  }
`;

export default { UserList, RoomListWrapper, RoomListTitle };
