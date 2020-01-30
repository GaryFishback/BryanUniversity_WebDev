import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    //sp is for the span element in the Paragraph function.
    return (
      <div id="wrapper">
        <section id="left">
          <div className="left_center_div">
            <svg></svg>
            <h2>Follow your interests.</h2>
            <svg></svg>
            <h2>Hear what people are talking about.</h2>
            <svg></svg>
            <h2>Join the conversation.</h2>
          </div>
        </section>
        <section id="right">
          <div className="login_nav">
            <form className="login_form">
              <input placeholder="Phone, email, or username" />
              <input placeholder="Password" />
              <Link to="/">Forgot password?</Link>
              <input type="submit" value="Log In" />
            </form>
          </div>
          <div className="right_center_div">
            <svg></svg>
            <h1>See what's happening in the world right now</h1>
            <h3>Join Twitter today.</h3>
            <button>Sign Up</button>
            <button>Log In</button>
          </div>
        </section>{" "}
        <footer>
          <span>About</span>
          <span>Help Center</span>
          <span>Terms</span>
          <span>Privacy policy</span>
          <span>Cookies</span>
          <span>Ads info</span>
          <span>Blog</span>
          <span>Status</span>
          <span>Jobs</span>
          <span>Brand</span>
          <span>Advertise</span>
          <span>Marketing</span>
          <span>Businesses</span>
          <span>Developers</span>
          <span>Directory</span>
          <span>Settings</span>
          <span>© 2020 Twitter, Inc.</span>
        </footer>
      </div>
    );
  }
}
export default Home;
