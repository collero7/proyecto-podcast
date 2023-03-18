import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import BackDrop from "@components/ui/backDrop/BackDrop";
import configureStore from "@services/redux/configureStore";
import ThemeContextProvider from "@services/providers/ThemeContextProvider";
import GlobalStyle from "@theme/GlobalStyle";
import Routes from "@routes/Routes";

import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import 'primereact/resources/themes/lara-light-indigo/theme.css';

import "material-icons/iconfont/material-icons.css";
import "material-icons/css/material-icons.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<BackDrop></BackDrop>}>
      <Provider store={configureStore()}>
        <ThemeContextProvider>
          <GlobalStyle />
          <Routes/>
        </ThemeContextProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("appContainer")
);

if (module.hot) {
  module.hot.accept();
}