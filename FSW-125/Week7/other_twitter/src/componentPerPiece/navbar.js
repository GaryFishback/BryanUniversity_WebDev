import React, { Component } from "react";
import { ArrayConsumer } from "../themeProvider/arrayProviderComponent";
import { Link, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
// import light from "./style/light";
// import dark from "./style/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);
import { Nav } from "./style/styles";
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
              {/* {array.all.map((tweet, num) => {
                return (
                  <Link to={`/${tweet.id}`}>
                    <div key={num} style={{ display: "inline" }}>
                      <span style={{ textDecoration: "underline" }}>
                        {tweet.name + " "}
                      </span>
                      <span>/</span>
                    </div>
                  </Link>
                );
              })} */}
              <Link to="/"> Ugly NavBar here</Link>
              {/* Both navbar are footer are the link back to the list of ugly things */}
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
