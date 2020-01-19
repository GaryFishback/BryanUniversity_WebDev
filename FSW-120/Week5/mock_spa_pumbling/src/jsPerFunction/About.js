import React, { Component } from "react";
import AboutPoints from "./Paragraphs";
class About extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="about">
        <AboutPoints className="firstAboutPoint" sp1="About Stuff Here" />
        <AboutPoints className="secondAboutPoint" sp1="About Stuff 2" />
        <AboutPoints className="thirdAboutPoint" sp1="About Stuff Here3" />
        <AboutPoints className="fourthAboutPoint" sp1="About Stuff Here4" />
      </div>
    );
  }
}
export default About;
