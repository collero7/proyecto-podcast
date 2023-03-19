import { createGlobalStyle } from 'styled-components';
import { display } from './sizes';

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
  font-size: 0.9rem;
  @media (min-width: ${display.desktop}) {
    font-size: 1rem;
  }
}

body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.appContainer {
  height: 100%;
}

.infoContent {
  padding: 15px;
  margin: auto;
  max-width: 100%;
  @media (min-width: ${display.mobile}) {
    max-width: 410px;
  }
}
.vertical-center {
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}


// ***** Estilos globales de componentes de PrimeReact ***** //
.p-scrolltop {
  z-index: 1 !important;
}

.p-progress-spinner-circle {
  stroke: #0056ac !important;
}

// ***** Fin estilos globales de componentes de PrimeReact ***** //
`;

export default GlobalStyle;