import { useContext } from "react";
import styled from "styled-components";
import { MobileContext } from "../App";
import agenda from "../assets/data/domingo.json";

const Main = styled.div<{isMobile:boolean}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction:${({isMobile})=>isMobile?"column":"row"};
`;

const Column = styled.aside<{ top: boolean,isMobile:boolean }>`
  height: ${({isMobile})=>isMobile?"10vh":"70vh"};
  width: ${({isMobile})=>isMobile?"100vw":"10vw"};
  color: #eaa911;
  display: flex;
  flex-direction: ${({isMobile})=>isMobile?"row":"column"};
  justify-content: ${({isMobile})=>isMobile?"center":"flex-start"};
  font-size: 4em;
  ${({ top,isMobile }) =>
   isMobile?"border-top:solid 12px #eaa911": top ? "border-right:solid 8px #eaa911" : "border-left:solid 9px #eaa911"};
  align-self: ${({ top }) => (top ? "flex-start" : "flex-end")};
  align-items: center;
  padding-top: 3rem;
`;

const Center = styled.main<{isMobile:boolean}>`
  width: ${({isMobile})=>isMobile?"100vw":"80vw"};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const LineEvent = styled.div<{isMobile:boolean}>`
  display: flex;
  align-items: center;
  width: ${({isMobile})=>isMobile?"98%":"90%"};
  height: 12rem;
  color: white;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: ${({isMobile})=>isMobile?"13px":"16px"};
  margin: 0.5em 0;

  
  &:hover {
    background-color:${({isMobile})=>isMobile?"#242424":"#323232"};
    font-size: ${({isMobile})=>isMobile?"13px":"20px"};
  }
`;

const Categoria = styled.span`
  color: #eaa911;
  font-size: 2em;
  font-family: "Evogria";

`;
const Tema = styled.span`
  color: white;
  font-family: "Evogria";
  font-size: 1.2em;
`;
const Horario = styled.h1`
  margin: 0 2rem 0 1rem;
  font-size: 4em;
  font-weight: 500;
`;

const Atracao = styled.span`
  font-size: 0.6em;
  font-family: "Heavitas";
`;

export default function Domingo() {

  const {isMobile} = useContext(MobileContext)

  return (
    <Main isMobile={isMobile}>
      <Column top={true} isMobile={isMobile}>
        <span>10/10</span>
        {isMobile?<span style={{margin:"0 1rem"}}>|</span>:null}
        <span>DOMINGO</span>
      </Column>
      <Center isMobile={isMobile}>
        {agenda.map((evento, index) => {
          return (
            <LineEvent isMobile={isMobile}>
              <Horario>{evento.horario}</Horario>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Categoria>
                  {evento.categoria} {evento.atracao !== ""?"|":""}<Atracao> {evento.atracao}</Atracao>
                </Categoria>
                <Tema>{evento.tema}</Tema>
              </div>
            </LineEvent>
          );
        })}
      </Center>
      {isMobile?null:<Column isMobile={isMobile} top={false}></Column>}
    </Main>
  );
}
 