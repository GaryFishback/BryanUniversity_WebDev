import React, { Component } from "react";
import StyleContext from "./../themeProvider/styleProviderComponent";
import styled from "styled-components";
import light from "./../themeProvider/light";
import dark from "./../themeProvider/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);
const Nav = styled.nav`
  width: 100%;
  height: 100%%;
  text-align: center;
  font-size: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
//  border-bottom: ${props => props.primary ? "double 3px black" : "double 3px black"};
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Nav" };
  }
  render() {
    return (
      <StyleContext.Consumer>
        {theme => {
          return theme === "lightblue" ? (
            <Nav primary>{`Navbar with ${theme}-theme`}</Nav>
          ) : (
            <Nav>{`Navbar with ${theme}-theme`}</Nav>
          );
        }}
      </StyleContext.Consumer>
    );
  }
}
export default NavBar;
