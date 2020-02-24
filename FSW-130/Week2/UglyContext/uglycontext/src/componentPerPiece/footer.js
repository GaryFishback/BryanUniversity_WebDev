import React, { Component } from "react";
import { ArrayConsumer } from "../themeProvider/arrayProviderComponent";
import { Footer } from "./style/styles";
import { Link, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
// import light from "./style/light";
// import dark from "./style/dark";
// console.log(dark);
// console.log(dark.colors);
// console.log(dark.colors.font);
// console.log(dark.colors.background);

//  border-bottom: ${props => props.primary ? "double 3px black" : "double 3px black"};
//footer and navbar are almost the same here.
class FooterTag extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Footer" };
  }
  render() {
    return (
      <ArrayConsumer>
        {array => {
          // return array.array === "lightblue" ? (
          return (
            <Footer primary>
              {/* {console.log(array.all)} */}
              {/* <a style={{ textDecoration: "none" }} href="#top">
                {array.all.map((tweet, num) => {
                  // console.log(tweet.name);
                  return (
                    <div key={num} style={{ display: "inline" }}>
                      <span style={{ textDecoration: "underline" }}>
                        {tweet.name + " "}
                      </span>
                      <span>/</span>
                    </div>
                  );
                })}
              </a> */}
              <Link to="/"> UGLY FoOteR HerE</Link>
            </Footer>
          );
          // ) : (
          //   <Footer>{`Footer with ${array.array}-array`}</Footer>
          // );
        }}
      </ArrayConsumer>
    );
  }
}

export default FooterTag;
