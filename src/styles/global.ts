import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "montsera";
  src: url("fonts/Montsera.ttf") format('truetype');
  font-weight:400;
}



  body {
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    margin:0
  }
`

export {GlobalStyle}