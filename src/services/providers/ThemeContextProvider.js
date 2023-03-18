import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { ThemeContext } from "../context/CoreContext";
import { ThemeProvider } from "styled-components";
import clientTheme from "../../theme/themes/clientTheme";

const ThemeContextProvider = (props) => {

  const setTheme = (client) => {
    setState({ ...state, client });
  };

  const initState = {
    client: "client_name",
    setTheme: setTheme,
  };

  const [state, setState] = useState(initState);

  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider theme={clientTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  client: PropTypes.oneOf(["client_name"]),
};

export default connect((store) => ({}),(dispatch) => ({}))(ThemeContextProvider);
