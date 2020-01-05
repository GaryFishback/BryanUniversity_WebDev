//Home.js
import React from "react";
import DiceBox from "./dicebox";
import "./home.css";
const numbers = [1, 2, 3, 4, 5];
class Home extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      number1: {
        number: this.randomNumber(),
        select: false,
        color: "black"
      },
      number2: {
        number: this.randomNumber(),
        select: false,
        color: ""
      },
      number3: {
        number: this.randomNumber(),
        select: false,
        color: ""
      },
      number4: {
        number: this.randomNumber(),
        select: false,
        color: ""
      },
      number5: {
        number: this.randomNumber(),
        select: false,
        color: ""
      }
    };
    this.handlingSelect1 = this.handlingSelect1.bind(this);
    // this.handlingSelect2 = this.handlingSelect2.bind(this);
    // this.handlingSelect3 = this.handlingSelect3.bind(this);
    // this.handlingSelect4 = this.handlingSelect4.bind(this);
    // this.handlingSelect5 = this.handlingSelect5.bind(this);
  }

  randomNumber = () => {
    const blue = Math.floor(Math.random() * 6);
    return blue;
  };
  handleButtonClick() {
    this.setState(prevState => {
      return {
        number1: {
          number:
            this.state.number1.select === true
              ? this.randomNumber()
              : this.state.number1.select === false
              ? prevState.number1.number
              : console.log(this.state.number1.number),
          select: prevState.number1.select,
          color: prevState.number1.color
        }
        // number2: this.randomNumber(),
        // number3: this.randomNumber(),
        // number4: this.randomNumber(),
        // number5: this.randomNumber()
      };
    });
  }

  handlingSelect1 = () => {
    this.setState(prevState => {
      return {
        number1: {
          number: prevState.number1.number,
          select:
            prevState.number1.select === false
              ? true
              : prevState.number1.select === true
              ? false
              : console.log("blue"),
          color:
            this.state.number1.select === false
              ? "black"
              : this.state.number1.select === true
              ? "red"
              : console.log(this.state.number1.color)
        }
      };
    });
    console.log(this.state.number1.select);
    console.log(this.state.number1.color);
  };
  //   handlingSelect2 = () => {
  //     this.setState(prevState => {
  //       return {
  //         color2:
  //           prevState.number2.select === true
  //             ? "red"
  //             : prevState.number2.select === false
  //             ? "black"
  //             : console.log("blue")
  //       };
  //     });
  //     this.setState(prevState => {
  //       return {
  //         select2:
  //           prevState.number2.select === false
  //             ? true
  //             : prevState.number2.select === true
  //             ? false
  //             : console.log("blue")
  //       };
  //     });
  //     console.log(this.state.number2.select);
  //   };
  //   handlingSelect3 = () => {
  //     this.setState(prevState => {
  //       return {
  //         color3:
  //           prevState.number3.select === true
  //             ? "red"
  //             : prevState.number3.select === false
  //             ? "black"
  //             : console.log("blue")
  //       };
  //     });
  //     this.setState(prevState => {
  //       return {
  //         select3:
  //           prevState.number3.select === false
  //             ? true
  //             : prevState.number3.select === true
  //             ? false
  //             : console.log("blue")
  //       };
  //     });
  //     console.log(this.state.number3.select);
  //   };
  //   handlingSelect4 = () => {
  //     this.setState(prevState => {
  //       return {
  //         color4:
  //           prevState.number4.select === true
  //             ? "red"
  //             : prevState.number4.select === false
  //             ? "black"
  //             : console.log("blue")
  //       };
  //     });
  //     this.setState(prevState => {
  //       return {
  //         select4:
  //           prevState.number4.select === false
  //             ? true
  //             : prevState.number4.select === true
  //             ? false
  //             : console.log("blue")
  //       };
  //     });
  //     console.log(this.state.number4.select);
  //   };
  //   handlingSelect5 = () => {
  //     this.setState(prevState => {
  //       return {
  //         color5:
  //           prevState.number5.select === true
  //             ? "red"
  //             : prevState.number5.select === false
  //             ? "black"
  //             : console.log("blue")
  //       };
  //     });
  //     this.setState(prevState => {
  //       return {
  //         select5:
  //           prevState.number5.select === false
  //             ? true
  //             : prevState.number5.select === true
  //             ? false
  //             : console.log("blue")
  //       };
  //     });
  //     console.log(this.state.number5.select);
  //   };
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div>
        {/* I mean: My DiceBox already takes in one number EACH (?) Do i still need another <Die /> (?) Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
            Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset (resetting is done in the next step).
            Have the dice reset (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll.*/}
        <DiceBox
          onClick={() => {
            this.handlingSelect1(this.state.number1.select);
          }}
          color={this.state.number1.color}
          className="number1"
          p1={this.state.number1.number}
        />
        {/* <DiceBox
          onClick={() => {
            this.handlingSelect2(this.state.number2.select);
          }}
          color={this.state.number2.color}
          className="number2"
          p1={this.state.number2}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect3(this.state.number3.select);
          }}
          color={this.state.number3.color}
          className="number3"
          p1={this.state.number3}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect4(this.state.number4.select);
          }}
          color={this.state.number4.color}
          className="number4"
          p1={this.state.number4}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect5(this.state.number5.select);
          }}
          color={this.state.number5.color}
          className="number5"
          p1={this.state.number5}
        /> */}
        <button onClick={this.handleButtonClick}>ClickMe for New!</button>
      </div>
    );
  }
}
export default Home;
// {
//     this.className === "num1"
//       ? this.state.number1
//       : this.className === "num2"
//       ? this.state.number2
//       : this.className === "num3"
//       ? this.state.number3
//       : this.className === "num4"
//       ? this.state.number4
//       : this.className === "num5"
//       ? this.state.number5
//       : console.log("blue")
//   }
