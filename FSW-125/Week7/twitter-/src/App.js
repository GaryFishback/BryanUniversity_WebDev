import React, { Component } from "react";
import { /*Link,*/ Switch, Route } from "react-router-dom";
import Login from "./jsPerFunction/LoginPage/Login";
import LoggedIn from "./jsPerFunction/LoggedIn/LoggedIn";
import LoggedOut from "./jsPerFunction/LoggedOut/LoggedOut";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: "grid",
          minHeight: " 100vh"
        }}
      >
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
      </div>
    );
  }
}
export default App;
