import React, { Component } from "react";
import Paragraph from "./Paragraph";
class Home extends Component {
  render() {
    //sp is for the span element in the Paragraph function.
    return (
      <div>
        <Paragraph className="firstCheckbox" p1="placeholderhere" />
        <Paragraph className="secondCheckbox" p1="Placeholder for checkbox2" />
        <Paragraph className="thirdCheckbox" p1="placeholder3" />
        <Paragraph className="fourthCheckbox" p1="placeholder4" />
      </div>
    );
  }
}
export default Home;
