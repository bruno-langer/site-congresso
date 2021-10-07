import { useContext } from "react";
import styled from "styled-components";
import { MobileContext } from "../App";
import faq from '../assets/data/faq.json'

const Main = styled.div<{ isMobile: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-content: flex-flex-start;
  flex-direction:column;
`;

const Title = styled.h1`
  color: #242424;
  font-size: 5em;
  font-weight: 400;
  text-align: center;
  background-color: #eaa911;
  box-shadow: 0 4px 30px #00000053;
  margin:0;
  margin-bottom: 0.2em;
  
`;
const WrapperQuestion = styled.div`
  color: white;
  font-family: "Evogria";
  display: flex;
  flex-direction: column;
  margin: 1.5vh 0;
  padding:1em 0.5em;
  text-align: center;

  
  strong{
        font-size: 1.5em;
        color: #eaa911;
        font-weight: 500;
        margin-bottom: .2em;
    }

    span{
        margin-left: 1em;
        font-size: 1.2em;

    }
  
    :last-child{
  border-bottom: none;
  box-shadow: none;

        
    }

`;


const WrapperList = styled.div`
display: flex;
flex-direction: column;
flex: 1;
overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: #6969dd #e0e0e0;

&::-webkit-scrollbar{
    width: 5px;
  /* background-color: #363636; */
  border-radius: 1em;
}
&::-webkit-scrollbar-thumb{
  background-color: #eaa9113b;
  border-radius: 1em;
  box-shadow: 0 4px 30px #eaa91155;

}

`

const Pergunta = ({ pergunta, resposta }: {
    pergunta: string;
    resposta: string;
}) => {
    return <WrapperQuestion>
        <strong>{pergunta}</strong>
        <span>{resposta}</span>
    </WrapperQuestion>
}


export default function Faq() {

    const { isMobile } = useContext(MobileContext)

    return (
        <Main isMobile={isMobile}>
            <Title>FAQ</Title>
            <WrapperList>
                {faq.map((pergunta) => {
                    return (
                        <Pergunta pergunta={pergunta.pergunta} resposta={pergunta.resposta} />
                    )
                }
                )}
            </WrapperList>
        </Main>
    )
}
