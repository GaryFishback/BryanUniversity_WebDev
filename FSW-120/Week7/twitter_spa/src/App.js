import React, { Component } from "react";

// import { BrowserRouter as Router } from "react-router-dom";
import { /*Link,*/ Switch, Route } from "react-router-dom";

//Pages:
// import Home from "./jsPerFunction/Home";
import Login from "./jsPerFunction/loginPage/Login";
import LoggedIn from "./jsPerFunction/LoggedIn/LoggedIn";
import LoggedOut from "./jsPerFunction/LoggedOut/LoggedOut";
// import NavBar from "./jsPerFunction/Navbar";
// import Footer from "./jsPerFunction/Footer";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";

//function components

class App extends Component {
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
        <main>
          <span></span>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/LoggedIn" render={() => <LoggedIn />} />
            <Route exact path="/LoggedOut" render={() => <LoggedOut />} />
            {/* <Route path="/about" render={() => <About />} />
            <Route path="/services" render={() => <Services />} /> */}
          </Switch>
          <span></span>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
