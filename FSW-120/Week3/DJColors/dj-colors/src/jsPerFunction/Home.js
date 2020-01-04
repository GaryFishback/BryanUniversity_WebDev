//Home.js
import React, { Component } from "react";
import HeaderButtons from "./ButtonPerSquare";
import ReactDOM from "react-dom";
// import Paragraph from "./Paragraph";
import SquaresWrapper from "./squaresWrapper";
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="creatorDiv">
        <HeaderButtons headerClass="HeaderDiv" />
        <button
          onMouseDown={() =>
            ReactDOM.render(
              <SquaresWrapper
                sectionClass="squaresWrapper"
                styleSquare={{ background: "red" }}
              />,
              document.getElementById("blue")
            )
          }
        >
          Create Color
        </button>
        <div
          id="blue"
          //   style={{ background: "blue", width: "1850px", height: "2000px" }}
        >
          {" "}
        </div>
      </div>
    );
  }
}
export default Home;
