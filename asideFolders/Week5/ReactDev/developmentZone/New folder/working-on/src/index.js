//index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // import { ThemeProvider } from 'styled-components'

import App from "./App";
// import light from "./Theme/light";

//socket        plug
ReactDOM.render(
  <Router>
    {/* <ThemeProvider theme={light}> */}
    <App />
    {/* </ThemeProvider> */}
  </Router>,
  document.getElementById("root")
);
