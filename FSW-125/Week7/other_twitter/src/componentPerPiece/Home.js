import React, { Component } from "react";

import NavBar from "./navbar";
import Main from "./main";
import Footer from "./footer";
import { Home } from "./style/styles";
// import { ThemeConsumer } from "./../themeProvider/themeProviderComponent";
import { ArrayProvider } from "../themeProvider/arrayProviderComponent";

class HomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { themeState: "" };
  }

  render() {
    return (
      <Home classname="home">
        {/* // this.setState({
            //   themeState: randomTheme,
            // }); */}

        <ArrayProvider>
          <NavBar />
          <Main />
          <Footer />
        </ArrayProvider>
      </Home>
    );
  }
}

export default HomeClass;

// {
//   /* <ArrayContext.Provider
// value={
//   ThemeContext.Provider.value === "light"
//     ? console.log("light")
//     : console.log(ThemeContext.Provider.value)
// }
// >
// <Home />
// </ArrayContext.Provider> */
// }
