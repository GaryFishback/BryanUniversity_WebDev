import React from "../node_modules/@types/react";
import ReactDOM from "../node_modules/@types/react-dom";
import { BrowserRouter } from "../node_modules/react-router-dom";
import UserProvider from "./context/userProvider";
import App from "./App.js";
// import "./index.css";

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>{" "}
  </UserProvider>,
  document.getElementById("root")
);
