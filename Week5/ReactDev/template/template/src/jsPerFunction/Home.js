import React, { Component } from "react";
import Checkboxes from "./Checkboxes";
class Home extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div>
        <Checkboxes className="firstCheckbox" sp1="placeholderhere" />
        <Checkboxes
          className="secondCheckbox"
          sp1="Placeholder for checkbox2"
        />
        <Checkboxes className="thirdCheckbox" sp1="placeholder3" />
        <Checkboxes className="fourthCheckbox" sp1="placeholder4" />
      </div>
    );
  }
}
export default Home;
