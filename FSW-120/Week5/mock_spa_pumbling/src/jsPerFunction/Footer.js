import React, { Component } from "react";
// import Home from "./jsPerFunction/Home";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <footer>
        <section style={{ justifySelf: "center" }}>
          <h2>Contact Us: </h2>
          <p>
            <span>Address: </span> 125, Dunes street 75000 Town, Country
          </p>
          <p>
            <span>Phone: </span> +1 (888)-123-4567
          </p>
        </section>
        <section style={{ justifySelf: "center", verticalAlign: "center" }}>
          {/* <video //just wanted to save this 
            // className="vjs-tech"
            // playsinline="playsinline"
            // id="vjs_video_1847_html5_api"
            // tabindex="-1"
            // role="application"
            // loop=""
            muted="muted"
            autoplay=""
            src="https://player.vimeo.com/external/353619377.hd.mp4?s=016da3d54fef73dad6b77a32c80565dde843e77c&amp;profile_id=175"
          ></video> */}
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
          </span>
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
          </span>{" "}
        </section>
        <section
          style={{
            gridColumn: "span 2",
            justifySelf: "center",
            borderTop: "solid red 5px",
            width: "100%",
            textAlign: "bottom"
          }}
        >
          <section
            style={{
              width: "100%",
              verticalAlign: "center",
              textAlign: "center"
            }}
          >
            <ul>
              <li>
                {" "}
                <Link style={{ display: "block" }} to="/">
                  {" Home "}
                </Link>
              </li>
              {"     "}
              <li>
                {" "}
                <Link style={{ display: "block" }} to="/about">
                  {" About  "}
                </Link>
              </li>
              {"      "}
              {"  "}
              <li>
                {" "}
                <Link style={{ display: "block" }} to="/services">
                  {" Services "}
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    );
  }
}
export default Footer;
