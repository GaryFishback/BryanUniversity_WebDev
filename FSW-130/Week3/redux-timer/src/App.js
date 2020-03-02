import React from "react";
import { Provider } from "react-redux";
import Home from "./home";
import store from "./store";
import "./App.css";
function App() {
  return (
    // here is where the provider of the store is wrapping our whole application. Which in this case will all be in component Home.
    //This allows any other child componenet to access the state.
    <Provider store={store}>
      <Home />
    </Provider>
    // I was going to talk today but i'm afriad my throat hasn't gotten any better..
  );
}
export default App;
