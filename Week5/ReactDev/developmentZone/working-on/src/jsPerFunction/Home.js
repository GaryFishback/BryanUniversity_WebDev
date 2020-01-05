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
    this.state = {
      color1: "",
      color2: "",
      color3: "",
      color4: ""
    };
  }
  handleChange = event => {
    this.setState = {
      color1: event.target.value,
      color2: event.target.value,
      color3: event.target.value,
      color4: event.target.value
    };
  };
  render() {
    console.log(this.state.color1);
    console.log(this.state.color2);
    console.log(this.state.color3);
    console.log(this.state.color4);
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="creatorDiv">
        <HeaderButtons
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          color4={this.state.color4}
          handleChange={this.handleChange}
          headerClass="HeaderDiv"
          // color={this.state.ColorSending}
          // onColorChange={this.ColorSending}
        />

        <button
          onMouseDown={() =>
            ReactDOM.render(
              <SquaresWrapper
                sectionClass="squaresWrapper"
                background1={this.state.color1}
                background2={this.state.color2}
                background3={this.state.color3}
                background4={this.state.color4}
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
