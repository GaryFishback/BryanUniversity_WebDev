import React /*, { Component }*/ from "react";
import "./App.css";
import Home from "./componentPerPiece/Home";
import { ThemeProvider } from "./themeProvider/themeProviderComponent";
// import StyleContext from "./themeProvider/styleProviderComponent";
function App() {
  // class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { blue: "N" };
  // }
  // render() {
  return (
    <ThemeProvider>
      {/* in the end, i haven't used theme prodiver again */}
      <Home />
    </ThemeProvider>
  );
  // }
}

export default App;
