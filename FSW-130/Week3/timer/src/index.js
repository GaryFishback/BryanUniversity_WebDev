import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Provider } from "react-redux";
import store from "./redux/store";

gsap.registerPlugin(
  CSSRulePlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin,
  ScrollToPlugin
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
