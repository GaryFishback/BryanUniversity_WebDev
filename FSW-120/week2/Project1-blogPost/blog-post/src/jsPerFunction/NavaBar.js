import React from "react";
function NavBar(props) {
  //   console.log(props);
  return (
    <nav id="mainNav" className={props.className}>
      <a className="navbar-brand" href="top">
        Start Bootstrap
      </a>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="top">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="top">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="top">
            Sample Post
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="top">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
