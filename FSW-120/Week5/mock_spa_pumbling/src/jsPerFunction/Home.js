import React, { Component } from "react";
import Paragraphs from "./Paragraphs";
class Home extends Component {
  render() {
    //sp is for the span element in the Welcome!es function.
    return (
      <div>
        <Paragraphs className="firstWelcome!" sp1="Welcome!" />
        <Paragraphs className="secondWelcome!" sp1="Welcome! for Welcome! 2 " />
        <Paragraphs className="thirdWelcome!" sp1="Welcome! 3" />
        <Paragraphs className="fourthWelcome!" sp1="Welcome! 4" />
      </div>
    );
  }
}
export default Home;
