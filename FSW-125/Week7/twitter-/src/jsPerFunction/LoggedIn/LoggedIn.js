import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { /*Link,*/ Switch, Route } from "react-router-dom";
import "./LoggedIn.css";
//Pages:
import Home from "./Home/Home";
// import Login from "./Login";
import LeftNav from "./LeftNav";
import RightCol from "./RightCol";
// import NavBar from "./jsPerFunction/Navbar";
// import Footer from "./jsPerFunction/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./Profile/Profile";

// import Services from "./jsPerFunction/Services";
//function components

class LoggedIn extends Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          minHeight: " 100vh"
          // justifyContent: "space-betweem"
        }}
      >
        {/* <NavBar /> */}
        <main id="loggedin_main">
          <section className="left_navbar">
            <LeftNav />
            {window.innerWidth > 1225 ? (
              <div>Tweet</div>
            ) : (
              <svg viewBox="0 0 24 24">
                <g>
                  <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                </g>
              </svg>
            )}
          </section>
          <section id="switcher_center">
            <Switch>
              <Route
                exact
                path="/LoggedIn/"
                render={() => (
                  <Router>
                    <Home />
                  </Router>
                )}
              />
              {/* <Route exact path="/LoggedIn/:id" component={Details} /> */}
              <Route exact path="/LoggedIn/Profile" component={Profile} />

              {/* <Route path="/services" render={() => <Services />} /> */}
            </Switch>
          </section>
          {window.innerWidth > 1400 ? (
            <section className="right_newsfeed">
              <RightCol />
            </section>
          ) : (
            console.log(1400)
          )}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default LoggedIn;
