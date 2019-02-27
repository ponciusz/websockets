import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 400px;
  display: flex;
`;

const UserContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const UserItem = styled.div`
  width: 49%;
  float: left;
  text-align: center;
  box-shadow: 0 0 0 1px gray;
  padding: 15px 0;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export default { Wrapper, UserContainer, UserItem };
