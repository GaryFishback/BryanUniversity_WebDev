//This is what was here before:
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

//this is what was left:
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//socket        plug
ReactDOM.render(<App />, document.getElementById("root"));
