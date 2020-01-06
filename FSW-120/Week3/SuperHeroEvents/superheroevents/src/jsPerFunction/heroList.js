import React from "react";
import SuperHero from "./SuperHeroes";
let data = require("./data.json"); //ik we could use the loader in the react-app but I honestly prefer it this way.
// console.log(data[0].name);
// import "./home.css";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const classes = [
  "hero1",
  "hero2",
  "hero3",
  "hero4",
  "hero5",
  "hero6",
  "hero7",
  "hero8",
  "hero9",
  "hero10"
];
class HeroList extends React.Component {
  constructor() {
    super();
    // this.countingClicks = this.countingClicks.bind(this);
    this.state = {};
  }

  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        {data.map(function(data, nums) {
          const keys = numbers[nums];
          console.log(keys);
          return (
            <SuperHero
              onClick={() => {
                alert(data.catchPhrase);
              }}
              key={numbers[nums]}
              className={classes[nums]}
              h1={data.name}
              h3={data.show}
              src={data.imageName}
              imgStyle={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          );
        })}
      </div>
    );
  }
}
export default HeroList;
