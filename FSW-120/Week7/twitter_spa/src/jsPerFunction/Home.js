import React, { Component } from "react";
import Paragraph from "./Paragraph";
import data from "./json/jsonObject";
console.log(data.statuses[0]);
console.log(data.statuses[1]);
class Home extends Component {
  render() {
    //sp is for the span element in the Paragraph function.
    return (
      <div>
        <h1>Blue</h1>
        <h1>Red</h1>
        <Paragraph className="firstCheckbox" p1="placeholderhere" />
        <Paragraph className="secondCheckbox" p1="Placeholder for checkbox2" />
        <Paragraph className="thirdCheckbox" p1="placeholder3" />
        <Paragraph className="fourthCheckbox" p1="placeholder4" />
      </div>
    );
  }
}
export default Home;
