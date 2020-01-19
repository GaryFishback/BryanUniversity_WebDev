import React, { Component } from "react";
import Service from "./Paragraphs";
class Services extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="services">
        <Service className="firstService " sp1="Service 1" />
        <Service className="secondService " sp1="Service 2" />
        <Service className="thirdService  " sp1="Service 3" />
        <Service className="fourthService  " sp1="Service 4" />
      </div>
    );
  }
}
export default Services;
