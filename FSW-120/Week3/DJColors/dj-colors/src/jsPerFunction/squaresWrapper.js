import React, { Component } from "react";
import Squares from "./Squares";
// import "./../App.css";
const numbers = ["1", "2", "3", "4"];

const classes = ["square1", "square2", "square3", "square4"];
class SquaresWrapper extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <section className={this.props.sectionClass}>
        {numbers.map((nums, col) => {
          //   const keys = numbers[nums];
          //   console.log(keys);
          return (
            <Squares
              id={classes[col]}
              key={nums}
              background1={this.props.background1}
              background2={this.props.background2}
              background3={this.props.background3}
              background4={this.props.background4}
              //   value="red"
            />
          );
        })}
        {/* one parethesis for return.. one curly for the funct... another parenthesis for map... and the blue curly THEN closing header */}
      </section>
    );
  }
}
export default SquaresWrapper;
