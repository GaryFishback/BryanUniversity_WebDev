import React, { Component } from "react";
import { /*Link,*/ Switch, Route } from "react-router-dom";
// import Login from "./jsPerFunction/loginPage/Login";
import Login from "./permanentComponents/jsPerFunction/loginPage/Login";
import LoggedIn from "./permanentComponents/jsPerFunction/LoggedIn/LoggedIn";

class App extends Component {
  render() {
    return (
      <div
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
          </Switch>
          <span></span>
        </main>
      </div>
    );
  }
}
export default App;
