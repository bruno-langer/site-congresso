import { useContext } from "react"
import styled from "styled-components"
import { MobileContext } from "../App"

const Main = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Legend = styled.div`
width: 25vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
color: #eaa911;
font-family: "Evogria";
border-bottom: solid 8px #eaa911;
h1{
    font-size: 70px;
}

p,span{
    font-size: 30px;
    text-align: center;
}
`


const MainMobile = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const LegendMobile = styled.div`

width: 90%;
display: flex;
flex-direction: column;
align-items: center;
color: #eaa911;
font-family: "Evogria";
margin-bottom: 2em ;

h1{
    font-size: 30px;
}

p,span{
    font-size: 20px;
    text-align: center;
}
`




export default function Local() {

    const { isMobile } = useContext(MobileContext)


    return isMobile ? (
        <MainMobile>
            <LegendMobile>
                <h1>LOCAL</h1>
                <p>Yelo Stage</p>
                <span> Av. Cel. Procópio Gomes, 358</span>
                <span>Centro, Joinville - SC</span>
            </LegendMobile>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.538959974258!2d-48.8439836843351!3d-26.309042074634526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb05270a96d77%3A0x57005a8515826f85!2sYELO%20STAGE!5e0!3m2!1sen!2sbr!4v1631721734867!5m2!1sen!2sbr" width="300" height="500" style={{ border: "solid 3px #eaa911", boxShadow: "0 0 50px #eaa91144" }} loading="lazy" title="location-map" />

        </MainMobile>) : (
        <Main>
            <Legend>
                <h1>LOCAL</h1>
                <p>Yelo Stage</p>
                <span> Av. Cel. Procópio Gomes, 358</span>
                <span>Centro, Joinville - SC</span>
            </Legend>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.538959974258!2d-48.8439836843351!3d-26.309042074634526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb05270a96d77%3A0x57005a8515826f85!2sYELO%20STAGE!5e0!3m2!1sen!2sbr!4v1631721734867!5m2!1sen!2sbr" width="1000" height="650" style={{ border: "solid 3px #eaa911", boxShadow: "0 0 50px #eaa91188" }} loading="lazy" title="location-map" />
        </Main>)
}