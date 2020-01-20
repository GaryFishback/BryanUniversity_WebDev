import React, { Component } from "react";
// import AboutPoints from "./Paragraphs";
class About extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        className="about"
      >
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridTemplateRows: "55px auto",
            padding: " 50px",
            paddingTop: "25px",
            borderBottom: "solid 10px red"
          }}
        >
          <h3 style={{ fontSize: "25px", width: "100%" }}>Who and What?</h3>
          <figure>
            <img
              style={{ gridRow: "span 2" }}
              src="https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/download.jpg"
            ></img>
          </figure>
          <p style={{ fontSize: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </section>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridTemplateRows: "55px auto",
            gridColumnGap: "40px",
            padding: "50px",
            // paddingRight: "50px",
            height: "auto"
          }}
        >
          <h3 style={{ fontSize: "25px", width: "100%" }}>Why Us?</h3>
          {/* <figure> */}
          <img
            style={{ gridRow: "span 2" }}
            src="https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-120/Week5/mock_spa_pumbling/src/imgs/FH15FEB_WKPLUMB_03.jpg"
          ></img>
          {/* </figure> */}
          <p style={{ fontSize: "20px", marginRight: "15px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </section>
      </div>
    );
  }
}
export default About;
