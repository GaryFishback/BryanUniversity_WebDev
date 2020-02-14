import React, { Component } from "react";
import StyleContext from "./../themeProvider/styleProviderComponent";
import styled from "styled-components";
import light from "./../themeProvider/light";
import dark from "./../themeProvider/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);
const Footer = styled.footer`
  width: 100%;
  height: 100%%;
  font-size: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
//  border-bottom: ${props => props.primary ? "double 3px black" : "double 3px black"};
//footer and navbar are almost the same here.
class FooterTag extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Footer" };
  }
  render() {
    return (
      <StyleContext.Consumer>
        {theme => {
          return theme === "lightblue" ? (
            <Footer primary>{`Footer with ${theme}-theme`}</Footer>
          ) : (
            <Footer>{`Footer with ${theme}-theme`}</Footer>
          );
        }}
      </StyleContext.Consumer>
    );
  }
}

export default FooterTag;
