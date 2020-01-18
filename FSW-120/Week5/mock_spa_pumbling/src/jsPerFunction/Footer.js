import React, { Component } from "react";
// import Home from "./jsPerFunction/Home";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div>
        <h2>Contact Us: </h2>
        <p>
          <span>Address: </span>
        </p>
        <p>
          <span>Phone: </span>
        </p>
        <section>
          <p>
            <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
            <Link to="/services">Services</Link>
          </p>
        </section>
        <section
          style={{
            width: "100%",
            background: "silver",
            height: "auto"
          }}
        >
          {/* <video //just wanted to save this 
            // class="vjs-tech"
            // playsinline="playsinline"
            // id="vjs_video_1847_html5_api"
            // tabindex="-1"
            // role="application"
            // loop=""
            muted="muted"
            autoplay=""
            src="https://player.vimeo.com/external/353619377.hd.mp4?s=016da3d54fef73dad6b77a32c80565dde843e77c&amp;profile_id=175"
          ></video> */}
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
          </span>
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
          </span>{" "}
        </section>
      </div>
    );
  }
}
export default Footer;
