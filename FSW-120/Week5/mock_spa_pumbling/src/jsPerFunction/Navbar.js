import React, { Component } from "react";
// import Home from "./jsPerFunction/Home";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <nav>
        <div>
          <figure>
            <img href="./../imgs/a653c11d-9aa1-495b-8aa4-a78d57d8914d_200x200.png" alt="plumbing logo"></img>
          </figure>
        </div>
        <div></div>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/services">Services</Link>
        </div>
      </nav>
    );
  }
}
export default NavBar;
