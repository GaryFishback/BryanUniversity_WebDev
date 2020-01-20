import React, { Component } from "react";
import AboutPoints from "./Paragraphs";
class About extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div className="about">
        <h3 style={{ fontSize: "30px" }}>Who and What?</h3>
        <figure>
          <img src=""></img>
        </figure>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 style={{ fontSize: "30px" }}>Why Us?</h3>
        <figure>
          <img src=""></img>
        </figure>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).This is
          a paragraph. This is the place to write a description about your
          business or services. You can add and edit text. Hover over me and
          click me once to show the pop-up menu. Double click me to edit the
          text. You can also move me around on the page by drag and dropping me.
          ​
        </p>
      </div>
    );
  }
}
export default About;
