import React, { Component } from "react";
import "./App.css";
// import style from "styled-components/macro";
// import { BrowserRouter as Router } from "react-router-dom";
import { /*Link,*/ Switch, Route } from "react-router-dom";
// import blue from "./img/download.jpg";

//Pages:
import Calculator from "./jsPerFunction/calculator";
import Home from "./jsPerFunction/Home";
// import NavBar from "./jsPerFunction/Navbar";
// import Footer from "./jsPerFunction/Footer";
// import About from "./jsPerFunction/About";
// import Services from "./jsPerFunction/Services";

//function components

class App extends Component {
  render() {
    // const Background = styled.section`
    //   /* Adapt the colors based on primary prop */
    //   background: ${props => (props.primary ? "grey" : "lightgrey")};
    // `;
    return (
      // <Background>
      <div
      // style={{
      //   display: "grid",
      //   gridTemplateRows: "200px auto 250px",
      //   minHeight: "100vh"
      //   // justifyContent: "space-betweem"
      // }}
      >
        {/* <NavBar /> */}
        <main>
          <span></span>
          <Switch>
            <Route exact path="/calculator" render={() => <Calculator />} />
            <Route exact path="/" render={() => <Home />} />
            {/* <Route path="/about" render={() => <About />} />
            <Route path="/services" render={() => <Services />} /> */}
          </Switch>
          <span></span>
        </main>
        {/* <Footer /> */}
      </div>
      // </Background>
    );
  }
}
export default App;
