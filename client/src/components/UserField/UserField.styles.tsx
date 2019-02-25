import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 0 2px #b1b1b1;
  margin: 0px 15px;
`;
const UserName = styled.div``;
const Points = styled.div`
  font-weight: 600;
`;
const PlayerNumber = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  background: red;
  color: white;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0 0 0 2px #b1b1b1;
  position: absolute;
  top: -4px;
  background: white;
`;
export default { Wrapper, UserName, PlayerNumber, Avatar, Points };
