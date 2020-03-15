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
        "#B2FF66" //"inchworm",
        // "#FFFF75", //"unmellow yellow",
        // "#F9E3D1", //champagne"
        // "#FFA8A8", //salmon pink
        // "#FFB5E8", //light hot pink
        // "#D9A8FF", //mauve
        // "#B2C6FF", //pale cornflower blue
        // "#A3E8FF", //fresh air
        // "aquamarine"
        // "#B2FF66", //"inchworm",
        // "#FFFF75", //"unmellow yellow",
        // "#F9E3D1", //champagne"
        // "#FFA8A8", //salmon pink
        // "#FFB5E8", //light hot pink
        // "#D9A8FF", //mauve
        // "#B2C6FF" //pale cornflower blue
      ],
      newRGA: `rgba(225, 225, 225, 0.7)`,
      name: "",
      phone: "",
      email: "",
      photoUrl: ""
    };
  }

  render() {
    return (
      <div className="flex">
        <h1>Contacts List: </h1>
        {this.state.colors.map((color, num) => {
          return (
            <Squares
              class={"box" + (num + 1)}
              colors={this.state.colors[num]}
              id={num}
              key={[num]}
              num={num + 1}
              name="Lissa Herilliumme"
              phone="786-567-5625"
              email="lissaherilliumme@yahoo.com"
              img="https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-130/Week4/contact-list/src/download.png"
            />
          );
        })}
        <hr />
        <section
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   width: "100vw",
        //   justifyItems: "center"
        // }}
        >
          <form
            id="form"
            style={{
              paddingTop: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: this.state.newColor,
              borderRadius: "100px",
              width: "60%",
              margin: "0 auto",
              height: "25vw",
              marginTop: 50
            }}
            onClick={e => {}}
          >
            <h1> Adding a New Contact!</h1>
            <section>
              <input
                style={{
                  background: this.state.newRGA
                }}
                placeholder="Name:"
                value={this.state.name}
                onChange={e => {
                  this.setState({
                    name: e.target.value
                  });
                }}
              ></input>{" "}
              <input
                style={{
                  background: this.state.newRGA
                }}
                placeholder="color"
                value={this.state.newColor}
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({
                    newColor: e.target.value
                  });
                  console.log(e.target);
                  var targetBackground = window
                    .getComputedStyle(e.target)
                    ["background"].split("none")[0]
                    .substr(4, 13)
                    .split(")")[0]
                    .split(", ");
                  console.log(targetBackground[0]);
                  console.log(targetBackground[1]);
                  console.log(targetBackground[2]);
                  this.setState({
                    newRGA: `rgba(${targetBackground[0]}, ${targetBackground[1]}, ${targetBackground[2]}, 0.5)`
                  });
                }}
              ></input>
              <input
                style={{
                  background: this.state.newRGA
                }}
                value={this.state.phone}
                onChange={e => {
                  this.setState({
                    phone: e.target.value
                  });
                }}
                placeholder="Phone:"
                type="number"
              ></input>
              <input
                value={this.state.email}
                onChange={e => {
                  this.setState({
                    email: e.target.value
                  });
                }}
                style={{
                  background: this.state.newRGA
                }}
                placeholder="Email:"
              ></input>{" "}
              <input
                value={this.state.photoUrl}
                onChange={e => {
                  this.setState({
                    photoUrl: e.target.value
                  });
                }}
                style={{
                  background: this.state.newRGA
                }}
                placeholder="Photo Url"
              ></input>
            </section>
            <br></br>
            <a
              href="http://localhost:3000/"
              className="button"
              onClick={this.newBox}
            >
              <span className="button__text">SAVE</span>
            </a>
          </form>
        </section>
        {/* <span
          id="here"
          style={{
            width: 50,
            height: 50,
            background: this.state.newRGA,
            marginTop: 100
          }}
        ></span> */}
      </div>
    );
  }
}
export default App;
