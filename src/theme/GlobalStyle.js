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

.p-dialog {
  max-width: 95%;
}

.p-scrolltop {
  z-index: 1 !important;
}

.p-dropdown-panel { 
  z-index: 1002 !important;
}

//Clase que referencia al componente Input, al label flotante
.p-float-label input:focus ~ label, .p-float-label input.p-filled ~ label, .p-float-label textarea:focus ~ label, .p-float-label textarea.p-filled ~ label, .p-float-label .p-inputwrapper-focus ~ label, .p-float-label .p-inputwrapper-filled ~ label {
  left: 0 !important;
  font-size: 14px !important;
}

//Clase que referencia al componente DatePicker
.p-datepicker table th {
  text-align: center !important;
}

// ***** Fin estilos globales de componentes de PrimeReact ***** //
`;

export default GlobalStyle;