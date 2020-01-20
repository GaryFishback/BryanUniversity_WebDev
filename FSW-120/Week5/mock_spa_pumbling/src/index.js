import React from "react";
import ReactDOM from "react-dom";
// import Axios from "axios";
import App from "./App";
// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { BrowserRouter as Router } from "react-router-dom";
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

// import "./App.css";
// console.log(Axios);

//socket        plug
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
