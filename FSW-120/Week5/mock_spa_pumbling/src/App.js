import React, { Component } from "react";
import "./App.css";
import Home from "./jsPerFunction/Home";
import NavBar from "./jsPerFunction/Navbar";
import Footer from "./jsPerFunction/Footer";
import About from "./jsPerFunction/About";
import Services from "./jsPerFunction/Services";
import { /*Link,*/ Switch, Route } from "react-router-dom";
//function components

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/services" render={() => <Services />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
