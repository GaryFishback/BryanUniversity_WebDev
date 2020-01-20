import React, { Component } from "react";
import Service from "./Paragraphs";
var services = [
  "Repair of sanitary devices",
  "Uncorking",
  "Search and repair water leak",
  "Search and repair gaz leak",
  "Search of breakdowns",
  "Junction",
  "Water connection",
  "Gaz connection"
];
var imgs = [];
class Services extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="services">
        {services.map(nums => {
          return (
            <section key={nums}>
              <h2>{nums}</h2>
              <p>
                {" "}
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </section>
          );
        })}
      </div>
    );
  }
}
export default Services;
