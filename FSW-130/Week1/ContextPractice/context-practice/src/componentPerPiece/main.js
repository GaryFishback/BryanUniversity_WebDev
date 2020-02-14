import React, { Component } from "react";
import StyleContext from "./../themeProvider/styleProviderComponent";
import styled from "styled-components";
import light from "./../themeProvider/light";
import dark from "./../themeProvider/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);
const Main = styled.main`
  width: 100%;
  height: 100%;
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
const Button = styled.button`
  width: 15%;
  height: 8vh;
  font-size: 3vw;
  border: none;
  align-self: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
//  border-bottom: ${props => props.primary ? "double 3px black" : "double 3px black"};
class MainTag extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Main" };
  }
  render() {
    return (
      <StyleContext.Consumer>
        {theme => {
          return theme === "lightblue" ? (
            <Main>
              {`Main with ${
                theme === "lightblue" ? "blue" : "lightblue"
              }-theme`}
              {/* so while nav and footer match their "theme" main will be the opposite of theirs, in whichever case it is */}
              <Button primary onClick={this.props.handleClick}>
                Toggler
              </Button>
            </Main>
          ) : (
            <Main primary>
              {`Main with ${
                theme === "lightblue" ? "blue" : "lightblue"
              }-theme`}
              <Button onClick={this.props.handleClick}>Toggler</Button>
            </Main>
          );
        }}
      </StyleContext.Consumer>
    );
  }
}

export default MainTag;
