import React, { Component } from "react";
import { ArrayConsumer } from "../contextProvider/arrayProviderComponent";
import { Link, Switch, Route } from "react-router-dom";
import { Nav } from "./style/styles";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { blue: "Nav" };
  }
  render() {
    return (
      <Nav primary>
        <Link to="/"> Ugly NavBar here</Link>
        {/* Both navbar are footer are the link back to the list of ugly things */}
      </Nav>
    );
  }
}
export default NavBar;
