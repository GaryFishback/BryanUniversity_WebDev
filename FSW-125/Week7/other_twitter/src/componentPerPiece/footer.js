import React, { Component } from "react";
import { ArrayConsumer } from "../contextProvider/arrayProviderComponent";
import { Footer } from "./style/styles";
import { Link, Switch, Route } from "react-router-dom";

class FooterTag extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Footer" };
  }
  render() {
    return (
      <Footer primary>
        <Link to="/"> UGLY FoOteR HerE</Link>
      </Footer>
    );
  }
}

export default FooterTag;
