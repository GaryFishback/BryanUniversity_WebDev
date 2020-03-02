import React, { Component } from "react";
import "./App.css";
// import AddTodo from "./src/components/AddTodo";
// import TodoList from "./src/components/TodoList";
// import VisibilityFilters from "./src/components/VisibilityFilters";
import Home from "./myComponents/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {" "}
        <h1>TIMER</h1>
        {/* Loading{"...".substr(0, (this.state.counter % 3) + 1)} */}
        <Home />
        {/* <VisibilityFilters /> */}
      </div>
    );
  }
}

export default App;

//   this.state = {
//     timer: "",
//     counter: 0
//   };
// }
// componentDidMount() {
//   let timer = setInterval(this.tick, 1000);
//   this.setState({ timer });
// }
// componentWillUnmount() {
//   this.clearInterval(this.state.timer);
// }
// tick() {
//   this.setState({
//     counter: this.state.counter + 1
//   });
// }
