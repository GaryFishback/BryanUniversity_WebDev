import React, { Component } from "react";
// import Home from "./jsPerFunction/Home";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "50% 50%",
          borderBottom: "red solid 5px"
        }}
      >
        <div
          style={{
            gridRow: "span 2",
            justifySelf: "center",
            verticalAlign: "center",
            textAlign: "center"
          }}
        >
          <figure>
            <img
              src="https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/a653c11d-9aa1-495b-8aa4-a78d57d8914d_200x200.png"
              alt="plumbing logo"
            ></img>
          </figure>
        </div>
        <div
          style={{
            justifySelf: "right",
            verticalAlign: "center",
            textAlign: "center"
          }}
        >
          {" "}
          <h1>
            <span>Tel </span> 1 (888)-123-4567
          </h1>
          <h3>24 hours 7 days a week!</h3>
        </div>
        <div
          style={{
            width: "100%",
            verticalAlign: "center",
            textAlign: "center"
          }}
        >
          <ul>
            <li>
              {" "}
              <Link style={{ display: "block" }} to="/">
                {" Home "}
              </Link>
            </li>
            {"     "}
            <li>
              {" "}
              <Link style={{ display: "block" }} to="/about">
                {" About  "}
              </Link>
            </li>
            {"      "}
            {"  "}
            <li>
              {" "}
              <Link style={{ display: "block" }} to="/services">
                {" Services "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
