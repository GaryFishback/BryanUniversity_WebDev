import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import Navbar from './navbar'
import Home from "./home";
import Add from "./addition";
import Subtraction from "./subtract";
import Mul from "./multiply";
import Div from "./divide";
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/sub" component={Subtraction} />
          <Route path="/mul" component={Mul} />
          <Route path="/div" component={Div} />
        </Switch>
      </div>
    );
  }
}

export default App;
