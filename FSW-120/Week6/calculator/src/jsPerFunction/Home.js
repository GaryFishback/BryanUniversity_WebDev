import React, { Component } from "react";
import Paragraph from "./Paragraph";
import style from "styled-components/macro";
import mediaMin from "./style/device";
import mediaMax from "./style/max-width";
import { Link /*Switch, Route */ } from "react-router-dom";

class Home extends Component {
  render() {
    const Button = style.button`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? "none" : "white")};
    font-size: 5em;
    // margin: 5em;
   text-align: center;
    // padding: 2em 3em;
    width: 50%;
    ${mediaMax.laptop`
  font-size: 3em;
  `}
    border: 0.15em double gray;
    border-radius: 3px;
   > a{
    color: ${props => (props.primary ? "white" : "gray")};
text-decoration: none;
    }
    display: inline;
    // margin-left:0;
    // margin-right: 0;
    margin-top: 10vw;
  `;
    const Heading = style.h1`
  text-align: center;
  background: lightgrey;
  width: 100%;
  font-size: 5em;
  // padding: 2em 3em;
  color: ${props => (props.primary ? "white" : "gray")};
text-decoration: none;
`;

    return (
      <div class="container">
        {" "}
        <Heading>Ready To Calculate? </Heading>
        {/* <Button primary> */}
        <Button>
          <Link to="/calculator">{"Calculator"}</Link>
        </Button>
        {/* </Button > */}
      </div>
    );
  }
}
export default Home;
