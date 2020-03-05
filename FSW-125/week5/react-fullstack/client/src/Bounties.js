import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Bounties extends Component {
  constructor() {
    super();
    this.state = {
      bounties: ""
    };
  }
  componentDidMount = () => {
    axios
      .get("/todos")
      .then(res =>
        this.setState({
          bounties: res.data
        })
      )
      .catch(err => console.log(err));

    console.log(this.state.bounties);
  };
  render() {
    return <div>yellow</div>;
  }
}

export default Bounties;
