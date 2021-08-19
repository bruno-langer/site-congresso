import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
`;

const DateContainer1 = styled.div`
  width: 15vw;
  height: 70vh;
  border-bottom: solid 5px #eaa911;
  border-right: solid 5px #eaa911;
  border-left: solid 5px #eaa911;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #333;
    font-size: x-large;
    cursor: pointer;
  }
`;
const DateContainer2 = styled.div`
  width: 15vw;
  height: 70vh;
  border-top: solid 5px #eaa911;
  border-right: solid 5px #eaa911;
  border-left: solid 5px #eaa911;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #333;
    font-size: x-large;
    cursor: pointer;
  }
`;

const Date = styled.p`
  color: #eaa911;
  font-size: 6em;
  font-family: "montsera";
  text-anchor: middle;
  text-decoration: none;
`;

export default function DatePicker() {
  return (
    <Main className="App">
      <Link to="/sabado" style={{ alignSelf: "flex-start",textDecoration:"none" }}>
        <DateContainer1 >
          <Date>09/10</Date>
        </DateContainer1>
      </Link>
      <Link to="/domingo" style={{ alignSelf: "flex-end",textDecoration:"none" }}>
        <DateContainer2 >
          <Date>10/10</Date>
        </DateContainer2>
      </Link>
    </Main>
  );
}
