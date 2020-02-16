import React /*, { Component }*/ from "react";
import "./App.css";
import Home from "./componentPerPiece/Home";
import ThemeContext from "./themeProvider/themeProviderComponent";
// import StyleContext from "./themeProvider/styleProviderComponent";
function App() {
  // class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { blue: "N" };
  // }
  // render() {
  return (
    <ThemeContext.Provider value={Math.random() >= 0.5 ? "light" : "dark"}>
      {/* so it could be either theme, randomly */}
      <Home />
    </ThemeContext.Provider>
  );
  // }
}

export default App;
