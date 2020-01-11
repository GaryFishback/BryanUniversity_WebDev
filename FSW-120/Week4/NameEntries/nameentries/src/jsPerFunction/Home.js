import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Input from "./Input";
// import List from "./List";

const listArray = ["blue", "blue1", "blue2", "blue3", "blue4", "blue5"];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      Name: ""
    };
  }
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  handleClick = e => {
    e.preventDefault();
    var li = document.createElement("li");
    li.textContent = this.state.Name;
    document.getElementById("NameList").append(li);
    // ReactDOM.render(
    //   <List li={this.state.Name} />,
    //   document.getElementById("NameList")
    // ); //I choose to use the traditional document.createElement method because the render method was not "adding the li element" but replacing everything inside the ul with it.
  };
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <main>
        <form>
          <Input
            handleChange={event =>
              this.setState({
                Name: event.target.value
              })
            }
            type="text"
            name="Name"
            classInput="nameInput"
            classh1="nameHeading"
            sp1={this.state.Name}
          />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <ul id="NameList">
          {listArray.map(nums => {
            return <li key={nums}>{nums}</li>;
          })}
        </ul>
      </main>
    );
  }
}
export default Home;
