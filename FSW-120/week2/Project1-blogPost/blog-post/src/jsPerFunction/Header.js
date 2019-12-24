import React from "react";
import Navbar from "./NavaBar";
function Header(props) {
  //   console.log(props);
  return (
    <div className={props.className}>
      <Navbar className="Navbar" />
    </div>
  );
}
export default Header;
