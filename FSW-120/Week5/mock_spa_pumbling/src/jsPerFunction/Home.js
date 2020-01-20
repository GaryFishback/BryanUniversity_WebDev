import React, { Component } from "react";
class Home extends Component {
  render() {
    //sp is for the span element in the Welcome!es function.
    return (
      <div className="Home">
        <section
          style={{
            display: "grid",
            gridTemplateRows: "25% 25% 25% 25%",
            gridTemplateColumns: "50% 50%"
          }}
        >
          <figure style={{ gridRow: "span 4" }}>
            <img src="https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/Plumber-fi21004487x730.png"></img>
          </figure>
          <h1
            style={{
              gridRow: "span 2",
              width: "100%",
              fontSize: "75px",
              color: "yellow"
            }}
          >
            Got A Leak!?
          </h1>
          <h2
            style={{
              gridRow: "span 2",
              width: "100%",
              fontSize: "75px",
              color: "red"
            }}
          >
            We Got You!
          </h2>
        </section>
        <section></section>
        <section></section>
      </div>
    );
  }
}
export default Home;
