import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MobileContext } from "../App";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
`;

const DateColumnContainer1 = styled.div`
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
const DateColumnContainer2 = styled.div`
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
const DateRowContainer1 = styled.div`
  width: 70vw;
  height: 20vh;
  border-bottom: solid 5px #eaa911;
  border-right: solid 5px #eaa911;
  border-top: solid 5px #eaa911;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;
const DateRowContainer2 = styled.div`
  width: 70vw;
  height: 20vh;
  border-bottom: solid 5px #eaa911;
  border-left: solid 5px #eaa911;
  border-top: solid 5px #eaa911;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const Date = styled.p`
  color: #eaa911;
  font-size: 6em;
  font-family: "Montsera";
  text-decoration: none;
`;

export default function DatePicker() {
  const { isMobile } = useContext(MobileContext);

  return (
    <Main style={{ flexDirection: isMobile ? "column" : "row" }}>
      <Link
        to="/sabado"
        style={{ alignSelf: "flex-start", textDecoration: "none" }}
      >
        {isMobile ? (
          <DateRowContainer1>
            <Date style={{fontSize:"4em"}}>09/10</Date>
          </DateRowContainer1>
        ) : (
          <DateColumnContainer1>
            <Date>09/10</Date>
          </DateColumnContainer1>
        )}
      </Link>
      <Link
        to="/domingo"
        style={{ alignSelf: "flex-end", textDecoration: "none" }}
      >
        {isMobile ? (
          <DateRowContainer2>
            <Date style={{fontSize:"4em"}}>10/10</Date>
          </DateRowContainer2>
        ) : (
          <DateColumnContainer2>
            <Date>10/10</Date>
          </DateColumnContainer2>
        )}
      </Link>
    </Main>
  );
}
