import React from "react";
import Squares from "./Square";
import "./App.css";
// import "./box.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        "#A3E8FF", //fresh air
        "aquamarine",
        "#B2FF66", //"inchworm",
        "#FFFF75", //"unmellow yellow",
        "#F9E3D1", //champagne"
        "#FFA8A8", //salmon pink
        "#FFB5E8", //light hot pink
        "#D9A8FF", //mauve
        "#B2C6FF", //pale cornflower blue
        "#A3E8FF", //fresh air
        "aquamarine",
        "#B2FF66", //"inchworm",
        "#FFFF75", //"unmellow yellow",
        "#F9E3D1", //champagne"
        "#FFA8A8", //salmon pink
        "#FFB5E8", //light hot pink
        "#D9A8FF", //mauve
        "#B2C6FF" //pale cornflower blue
      ]
    };
  }

  render() {
    return (
      <div className="flex">
        <h1>Contacts List: </h1>
        {console.log(this.state.colors) //i have moved this console.log around to follow the logic to decipher where it broke. Here i can see that the logix was never broken through this file. Itwas indeed broken on the other file.
        }
        {this.state.colors.map((color, num) => {
          return (
            <Squares
              class={"box" + (num + 1)}
              colors={this.state.colors[num]}
              num={num + 1}
              name="Lissa Herilliumme"
              phone="786-567-5625"
              email="lissaherilliumme@yahoo.com"
              img="C:\Users\17865\dev\BryanUniversity_WebDev\FSW-130\Week4\contact-list\src\download.png"
            />
          );
        })}
      </div>
    );
  }
}
export default App;
