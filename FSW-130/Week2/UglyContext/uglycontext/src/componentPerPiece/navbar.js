import React, { Component } from "react";
import { ArrayConsumer } from "./../themeProvider/arrayProviderComponent";
import styled from "styled-components";
import light from "./../themeProvider/light";
import dark from "./../themeProvider/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 3vw;
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
      <ArrayConsumer>
        {array => {
          // console.log(array.all);
          // return array.array === "lightblue" ? (
          return (
            <Nav primary>
              <a style={{ textDecoration: "none" }} href="#top">
                {array.all.map((tweet, num) => {
                  return (
                    <div key={num} style={{ display: "inline" }}>
                      <span style={{ textDecoration: "underline" }}>
                        {tweet.user.name + " "}
                      </span>
                      <span>/</span>
                    </div>
                  );
                })}
              </a>
            </Nav>
          );
          // ) : (
          //   <Nav>{`Navbar with ${array.array}-array`}</Nav>
          // );
        }}
      </ArrayConsumer>
    );
  }
}
export default NavBar;
