import React, { Component } from "react";
import { ArrayConsumer } from "./../themeProvider/arrayProviderComponent";
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
  font-size: 3vw;
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
      <ArrayConsumer>
        {array => {
          // return array.array === "lightblue" ? (
          return (
            <Footer primary>
              {/* {console.log(array.all)} */}
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
