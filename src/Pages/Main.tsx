import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobileContext } from "../App";
import memphis1 from '../assets/me1.png'
import memphis2 from '../assets/me2.png'
import memphis3 from '../assets/me3.png'
import memphis4 from '../assets/me4.png'


const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  overflow: hidden;
`;

const Title = styled.span`
font-size: 140px;
background: radial-gradient(#eaa911, rgba(234, 169, 17, 0.651));
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
cursor: default;
`
const Subtitle = styled.div`
width: 40%;
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 1.5rem;

span{
    border-bottom: solid 3px transparent;
    transition: all .3s;
    font-family: "Evogria";
    padding:0.5rem 0;   


    :hover{
        border-bottom: solid 3px #eaa911;
    }
}

`
const MainMobile = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
overflow: hidden;


&>div{
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    font-family: "Evogria";
    z-index: 2;
    font-size: 1.3rem;
    /* margin-top: 2rem; */

    a{
        width: 80%;
        height: 2.5em;
        color: #242424 !important;
        background-color: #eaa911 ;
        box-shadow: 0 4px 30px #eaa91155;
        border-radius: 3px;
        margin:1rem 0%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


}

h1{
    width: 90%;
    color: #eaa911;
    font-size: 5.5rem;
    font-weight: 500;
    z-index: 3;
    margin: 0;
    margin-top: 2rem;
}

`

export default function Main() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    function updatePosition(e: React.MouseEvent<HTMLSpanElement>) {
        if (titleRef.current) {
            const _x = titleRef?.current?.offsetLeft + Math.floor(titleRef?.current?.offsetWidth / 2)
            const _y = titleRef?.current?.offsetTop + Math.floor(titleRef?.current?.offsetHeight / 2)
            setX((e.clientX - _x) / -20)
            setY((e.clientY - _y) / -10)
        }
    }


    const { isMobile } = useContext(MobileContext)
    const titleRef = useRef<HTMLSpanElement>(null)

    return isMobile ?
        <MainMobile>
            <img src={memphis4} style={{ position: "absolute",width:"100vw",height:"100vh" }} alt="decorative-patterns" />
            <h1>CONGRESSO JOVEM TEMPO DA GRACA</h1>
            <div> <Link to="date" style={{ color: "#eaa911", textDecoration: "none" }}><span>Programação</span></Link>
                <a href="https://www.eventbrite.com/e/congresso-jovem-tempo-da-graca-tickets-164032490595" style={{ color: "#eaa911", textDecoration: "none" }}><span>Ingressos</span></a>
                <Link to="local" style={{ color: "#eaa911", textDecoration: "none" }}><span>Localização</span></Link>
                <Link to="faq" style={{ color: "#eaa911", textDecoration: "none" }}><span>FAQ</span></Link>
            </div>

        </MainMobile> :
        <Frame>
            <img src={memphis1} style={{ position: "absolute", transform: `rotateX(${-0.5 * x}deg) rotateY(${-0.5 * y}deg)`, transition: "transform 1s", zIndex: -1 }} alt="decorative-patterns" />
            <img src={memphis2} style={{ position: "absolute", transform: `rotateX(${0.8 * y}deg) rotateY(${0.8 * x}deg)`, transition: "transform 1s", zIndex: -1 }} alt="decorative-patterns" />
            <img src={memphis3} style={{ position: "absolute", transform: `rotateX(${-0.5 * x}deg) rotateY(${-0.7 * y}deg)`, transition: "transform 1s", zIndex: -1 }} alt="decorative-patterns" />
            <Title style={{ transform: `rotateX(${-0.2 * x}deg) rotateY(${y}deg)`, transition: "transform 1s" }}
                onMouseEnter={() => { }}
                onMouseLeave={() => { setX(0); setY(0) }}
                onMouseMove={(e) => { updatePosition(e) }}
                ref={titleRef}
            >CONGRESSO JOVEM TEMPO DA GRACA</Title>
            <Subtitle>
                <Link to="date" style={{ color: "#eaa911", textDecoration: "none" }}><span>Programação</span></Link>
                <a href="https://www.eventbrite.com/e/congresso-jovem-tempo-da-graca-tickets-164032490595" style={{ color: "#eaa911", textDecoration: "none" }}><span>Ingressos</span></a>
                <Link to="local" style={{ color: "#eaa911", textDecoration: "none" }}><span>Localização</span></Link>
                <Link to="faq" style={{ color: "#eaa911", textDecoration: "none" }}><span>FAQ</span></Link>
            </Subtitle>
        </Frame>
}