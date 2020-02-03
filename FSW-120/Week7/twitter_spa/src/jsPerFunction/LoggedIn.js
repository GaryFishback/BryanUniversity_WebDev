import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { /*Link,*/ Switch, Route } from "react-router-dom";
import "./../LoggedIn.css";
//Pages:
import Home from "./Home";
// import Login from "./Login";
import LeftNav from "./LeftNav";
// import NavBar from "./jsPerFunction/Navbar";
// import Footer from "./jsPerFunction/Footer";
// import About from "./jsPerFunction/About";
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
            {" "}
            <LeftNav />
            <div>Tweet</div>
          </section>
          <section id="switcher_center">
            <Switch>
              <Route exact path="/LoggedIn/" render={() => <Home />} />
              {/* <Route exact path="/LoggedIn" render={() => <Explore />} />
            <Route exact path="/LoggedIn" render={() => <Notifications />} />
            <Route exact path="/LoggedIn" render={() => <Bookmarks />} />
            <Route exact path="/LoggedIn" render={() => <Lists />} />
            <Route exact path="/LoggedIn" render={() => <Profile />} /> */}
              {/* <Route path="/about" render={() => <About />} />
            <Route path="/services" render={() => <Services />} /> */}
            </Switch>
          </section>
          <section className="right_newsfeed">
            <h1>NEWS HERE</h1>
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default LoggedIn;
