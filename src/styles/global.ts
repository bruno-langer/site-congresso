import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Montsera";
  src: url("fonts/Montsera.ttf") format('truetype');
  src: url("fonts/Montsera.woff") format('woff');
}
@font-face {
  font-family: "Pixel";
  src: url("fonts/Pixelopolis 9000.ttf") format('truetype');
}
@font-face {
  font-family: "Evogria";
  src: url("fonts/Evogria.otf") format('opentype');
}
@font-face {
  font-family: "Heavitas";
  src: url("fonts/Heavitas.ttf") format('truetype');
}



  body {
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    margin:0;
    font-family: "Montsera";
  overflow: hidden;

  }
`

export { GlobalStyle }