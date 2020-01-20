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
var imgs = [
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/Final-Toilet-DT-sm.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/white-everbilt-polypropylene-fittings-c3522605-76_1000.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/shutterstock_198730244-faucet.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/download%20(1).jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/FH15FEB_WKPLUMB_02.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/FH15FEB_WKPLUMB_08.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/shutterstock_423737233-valve.jpg",
  "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/download%20(2).jpg"
];
class Services extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33% 33% 33%",
          //   gridTemplateRows: "55px auto",
          gridRowGap: "25px",
          padding: "50px",
          // paddingRight: "50px",
          height: "auto"
        }}
        className="services"
      >
        {services.map((nums, img) => {
          return (
            <section style={{}} key={nums}>
              <h2 style={{ fontSize: "25px", width: "100%" }}>{nums}</h2>
              <img style={{ gridRow: "span 2" }} src={imgs[img]}></img>
              <p style={{ fontSize: "20px", marginRight: "15px" }}>
                {" "}
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </section>
          );
        })}
      </div>
    );
  }
}
export default Services;
