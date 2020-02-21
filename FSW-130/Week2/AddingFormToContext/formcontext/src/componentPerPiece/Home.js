import React, { Component } from "react";

import NavBar from "./navbar";
import Main from "./main";
import Footer from "./footer";
// import { ThemeConsumer } from "./../themeProvider/themeProviderComponent";
import { ArrayProvider } from "./../themeProvider/arrayProviderComponent";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { themeState: "" };
  }

  render() {
    const Home = styled.div`
      display: grid;
      grid-template-rows: 5vw auto 5vw;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      over-flow-y: scroll;
    `;
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

export default Home;

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
