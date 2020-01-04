//Home.js
import React, { Component } from "react";
import HeaderButtons from "./ButtonPerSquare";
import ReactDOM from "react-dom";
// import Paragraph from "./Paragraph";
import SquaresWrapper from "./squaresWrapper";
class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.ColorSending = this.ColorSending.bind(this);
  //   this.state = { ColorSending: "" };
  // }
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target });
    console.log(this.state.value);
  };
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="creatorDiv">
        <HeaderButtons
          value={this.state.value}
          onChange={this.handleChange}
          backgroundColor={this.state.value}
          headerClass="HeaderDiv"
          // color={this.state.ColorSending}
          // onColorChange={this.ColorSending}
        />

        <button
          onMouseDown={() =>
            ReactDOM.render(
              <SquaresWrapper
                sectionClass="squaresWrapper"
                styleSquare={{ background: "blue" }}
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
        ></div>
      </div>
    );
  }
}
export default Home;
