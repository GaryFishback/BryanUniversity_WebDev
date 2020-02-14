import React, { Component } from "react";

import NavBar from "./navbar";
import Main from "./main";
import Footer from "./footer";
import ThemeContext from "./../themeProvider/themeProviderComponent";
import StyleContext from "./../themeProvider/styleProviderComponent";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { themeState: "" };
  }

  render() {
    const Home = styled.div`
      display: grid;
      grid-template-rows: 10vw auto 10vw;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
    `;
    return (
      <Home classname="home">
        <ThemeContext.Consumer>
          {randomTheme => {
            // this.setState({
            //   themeState: randomTheme,
            // });

            return (
              <StyleContext.Provider
                value={
                  this.state.themeState === "light" ? "lightblue" : "darkblue"
                }
              >
                <NavBar />
                <Main
                  handleClick={() => {
                    // console.log(this.state);
                    this.setState(prevState => ({
                      themeState: Math.random() >= 0.5 ? "light" : "dark"
                    }));
                    // so the toggle doesn't actually switch from one to the other. It runs a random algorithm that re-decides which theme will come next.
                    //so it doesn't always have to change.

                    console.log(this.state.themeState);
                  }}
                />
                <Footer />
              </StyleContext.Provider>
            );
          }}
        </ThemeContext.Consumer>
      </Home>
    );
  }
}

export default Home;

// {
//   /* <StyleContext.Provider
// value={
//   ThemeContext.Provider.value === "light"
//     ? console.log("light")
//     : console.log(ThemeContext.Provider.value)
// }
// >
// <Home />
// </StyleContext.Provider> */
// }
