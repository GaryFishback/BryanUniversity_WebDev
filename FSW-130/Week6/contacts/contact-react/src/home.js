import React from "react";
import Squares from "./Square";
import {
  addOne,
  deleteOne,
  countingContacts,
  colorInput,
  nameInput,
  emailInput,
  phoneInput,
  imgUrlInput
} from "./actions";
import { connect } from "react-redux"; //first connect is imported
// import "./box.css";
// console.log(
//   addOne,
//   deleteOne,
//   countingContacts,
//   colorInput,
//   nameInput,
//   emailInput,
//   phoneInput,
//   imgUrlInput
// );
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      // colors: [
      //   "#A3E8FF", //fresh air
      //   "aquamarine",
      //   "#B2FF66" //"inchworm",
      //   // "#FFFF75", //"unmellow yellow",
      //   // "#F9E3D1", //champagne"
      //   // "#FFA8A8", //salmon pink
      //   // "#FFB5E8", //light hot pink
      //   // "#D9A8FF", //mauve
      //   // "#B2C6FF", //pale cornflower blue
      //   // "#A3E8FF", //fresh air
      //   // "aquamarine"
      //   // "#B2FF66", //"inchworm",
      //   // "#FFFF75", //"unmellow yellow",
      //   // "#F9E3D1", //champagne"
      //   // "#FFA8A8", //salmon pink
      //   // "#FFB5E8", //light hot pink
      //   // "#D9A8FF", //mauve
      //   // "#B2C6FF" //pale cornflower blue
      // ],
      // newRGA: `rgba(225, 225, 225, 0.7)`,
      // name: "",
      // phone: "",
      // email: "",
      // photoUrl: ""
    };
  }
  componentDidMount = () => {
    console.log(this.props);
  };
  newBox = e => {
    e.preventDefault();
    var nameInput = this.props.name;
    var colorInput = this.props.newRGA;
    var phoneInput = this.props.phone;
    var emailInput = this.props.email;
    var imgInput = this.props.photoUrl;
    console.log(this.props);
    var newContact = {
      name: nameInput,
      color: colorInput,
      phone: phoneInput,
      email: emailInput,
      img: imgInput
    };
    console.log(newContact);
    this.props.dispatch(countingContacts());
    this.props.dispatch(addOne(newContact));
    console.log(this.props);
    // creatingBoxes(newState.color[newState.color.length - 1], newState.counter);
  };
  delete = e => {
    e.preventDefault();
    console.log(e.target.id);
    this.props.dispatch(deleteOne(e.target.id));
    console.log(this.props);
    // var div = document.getElementById(e.target.id);
    // console.log(div);
    // div.remove();
    // console.log(div);
    var h2s = document.getElementsByClassName("changing-nums");
    console.log(h2s);
    for (let i = 0; i < h2s.length; i++) {
      h2s[i].textContent = "Contact #" + (i + 1);
    }
  };
  render() {
    return (
      <div className="flex">
        <h1>Contacts List: </h1>
        {this.props.color.map((color, num) => {
          return (
            <Squares
              class={"box" + (num + 1)}
              colors={this.props.colorList[num]}
              id={num}
              del={this.delete}
              key={[num]}
              num={num + 1}
              name={color.name}
              phone={color.phone}
              email={color.email}
              img={color.img}
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
              backgroundColor: this.props.newRGA,
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
                  background: this.props.newRGA
                }}
                placeholder="Name:"
                value={this.props.name}
                onChange={e => {
                  this.props.dispatch(nameInput(e.target.value));
                  console.log(this.props);
                }}
              ></input>{" "}
              <input
                style={{
                  background: this.props.newRGA
                }}
                placeholder="color"
                // value={this.props.newRGA}
                onChange={e => {
                  console.log(e.target.value);
                  var form = document.getElementById("form");
                  form.style.background = e.target.value;
                  var targetBackground = window
                    .getComputedStyle(e.target)
                    ["background"].split("none")[0]
                    .substr(4, 13)
                    .split(")")[0]
                    .split(", ");
                  console.log(targetBackground[0]);
                  console.log(targetBackground[1]);
                  console.log(targetBackground[2]);

                  var shadedColor = `rgba(${targetBackground[0]}, ${targetBackground[1]}, ${targetBackground[2]}, 0.5)`;
                  console.log(shadedColor);

                  e.target.style.background = shadedColor;

                  // console.log(e.target.value);
                  this.props.dispatch(colorInput(shadedColor));
                  // console.log(this.props);
                  // console.log(e.target);

                  // var targetBackground = window
                  //   .getComputedStyle(e.target)
                  //   ["background"].split("none")[0]
                  //   .substr(4, 13)
                  //   .split(")")[0]
                  //   .split(", ");
                  // console.log(targetBackground[0]);
                  // console.log(targetBackground[1]);
                  // console.log(targetBackground[2]);
                  // var newRGA = `rgba(${targetBackground[0]}, ${targetBackground[1]}, ${targetBackground[2]}, 0.5)`;
                  // this.props.dispatch(colorInput(newRGA));
                  // console.log(newRGA);
                }}
              ></input>
              <input
                style={{
                  background: this.props.newRGA
                }}
                value={this.props.phone}
                onChange={e => {
                  this.props.dispatch(phoneInput(e.target.value));
                  console.log(this.props.phone);
                }}
                placeholder="Phone:"
                type="number"
              ></input>
              <input
                value={this.props.email}
                onChange={e => {
                  this.props.dispatch(emailInput(e.target.value));
                  console.log(this.props.email);
                }}
                style={{
                  background: this.props.newRGA
                }}
                placeholder="Email:"
              ></input>{" "}
              <input
                value={this.props.photoUrl}
                onChange={e => {
                  this.props.dispatch(imgUrlInput(e.target.value));
                  console.log(this.props.photoUrl);
                }}
                style={{
                  background: this.props.newRGA
                }}
                placeholder="Photo Url"
              ></input>
            </section>
            <br></br>
            <a
              href="http://localhost:3000/"
              className="button"
              onClick={e => this.newBox(e)}
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
            background: this.props.newRGA,
            marginTop: 100
          }}
        ></span> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  //mapStatetoProps "grabs" the state and connects it with this compoenent where state will be passed as props.
  return {
    color: state.color,
    colorList: state.colorList,
    changing: state.changing,
    counter: state.counter,
    newRGA: state.newRGA,
    newRGA: state.newRGA,
    email: state.email,
    name: state.name,
    phone: state.phone,
    photoUrl: state.photoUrl
  };
};
export default connect(mapStateToProps)(Home);
