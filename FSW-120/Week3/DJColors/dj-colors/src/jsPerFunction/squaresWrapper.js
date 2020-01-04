import React, { Component } from "react";
import Squares from "./Squares";
// import "./../App.css";
const numbers = ["1", "2", "3", "4"];
// const colors = ["#ffffff", "#F7E3B3", "#71EB92", "#000fff"];
const classes = ["square1", "square2", "square3", "square4"];
const input1 = document.getElementsByClassName("input1")[0];
console.log(input1);
class SquaresWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
              styleSquare={this.props.styleSquare}
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
