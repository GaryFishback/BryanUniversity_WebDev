import React, { Component } from "react";
import { /*Link,*/ Switch, Route } from "react-router-dom";
import Login from "./jsPerFunction/LoginPage/Login";
import LoggedIn from "./jsPerFunction/LoggedIn/LoggedIn";
import LoggedOut from "./jsPerFunction/LoggedOut/LoggedOut";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./jsPerFunction/LoggedIn/redux/store";
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
            <Route
              path="/LoggedIn"
              render={() => (
                <Provider store={store}>
                  <Router>
                    <LoggedIn />
                  </Router>
                </Provider>
              )}
            />
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
