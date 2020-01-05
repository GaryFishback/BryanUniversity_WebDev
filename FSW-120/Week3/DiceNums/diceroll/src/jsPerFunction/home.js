import React from "react";
import DiceBox from "./dicebox";
import "./home.css";
// const numbers = [1, 2, 3, 4, 5];
class Home extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.countingClicks = this.countingClicks.bind(this);
    this.state = {
      count: 0,
      number1: {
        number: this.randomNumber(),
        select: true,
        color: "black"
      },
      number2: {
        number: this.randomNumber(),
        select: true,
        color: ""
      },
      number3: {
        number: this.randomNumber(),
        select: true,
        color: ""
      },
      number4: {
        number: this.randomNumber(),
        select: true,
        color: ""
      },
      number5: {
        number: this.randomNumber(),
        select: true,
        color: ""
      }
    };
    this.handlingSelect1 = this.handlingSelect1.bind(this);
    this.handlingSelect2 = this.handlingSelect2.bind(this);
    this.handlingSelect3 = this.handlingSelect3.bind(this);
    this.handlingSelect4 = this.handlingSelect4.bind(this);
    this.handlingSelect5 = this.handlingSelect5.bind(this);
  }

  randomNumber = () => {
    const blue = Math.floor(Math.random() * 6);
    return blue;
  };
  countingClicks() {
    this.state.count !== 3
      ? this.handleButtonClick()
      : this.setState(prevState => {
          return {
            count: 0,
            number1: {
              number: 0,
              select: false,
              color: "black"
            },
            number2: {
              number: 0,
              select: false,
              color: "black"
            },
            number3: {
              number: 0,
              select: false,
              color: "black"
            },
            number4: {
              number: 0,
              select: false,
              color: "black"
            },
            number5: {
              number: 0,
              select: false,
              color: "black"
            }
          };
        });
  }
  handleButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        number1: {
          number:
            this.state.number1.select === false
              ? this.randomNumber()
              : this.state.number1.select === true
              ? prevState.number1.number
              : console.log(this.state.number1.number),
          select: prevState.number1.select,
          color: prevState.number1.color
        },
        number2: {
          number:
            this.state.number2.select === false
              ? this.randomNumber()
              : this.state.number2.select === true
              ? prevState.number2.number
              : console.log(this.state.number2.number),
          select: prevState.number2.select,
          color: prevState.number2.color
        },
        number3: {
          number:
            this.state.number3.select === false
              ? this.randomNumber()
              : this.state.number3.select === true
              ? prevState.number3.number
              : console.log(this.state.number3.number),
          select: prevState.number3.select,
          color: prevState.number3.color
        },
        number4: {
          number:
            this.state.number4.select === false
              ? this.randomNumber()
              : this.state.number4.select === true
              ? prevState.number4.number
              : console.log(this.state.number4.number),
          select: prevState.number4.select,
          color: prevState.number4.color
        },
        number5: {
          number:
            this.state.number5.select === false
              ? this.randomNumber()
              : this.state.number5.select === true
              ? prevState.number5.number
              : console.log(this.state.number5.number),
          select: prevState.number5.select,
          color: prevState.number5.color
        }
      };
    });
    console.log(this.state.count);
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
            this.state.number1.select === true
              ? "black"
              : this.state.number1.select === false
              ? "red"
              : console.log(this.state.number1.color)
        }
      };
    });
    console.log(this.state.number1.select);
    console.log(this.state.number1.color);
  };
  handlingSelect2 = () => {
    this.setState(prevState => {
      return {
        number2: {
          number: prevState.number2.number,
          select:
            prevState.number2.select === false
              ? true
              : prevState.number2.select === true
              ? false
              : console.log("blue"),
          color:
            this.state.number2.select === true
              ? "black"
              : this.state.number2.select === false
              ? "red"
              : console.log(this.state.number2.color)
        }
      };
    });
    console.log(this.state.number2.select);
    console.log(this.state.number2.color);
  };
  handlingSelect3 = () => {
    this.setState(prevState => {
      return {
        number3: {
          number: prevState.number3.number,
          select:
            prevState.number3.select === false
              ? true
              : prevState.number3.select === true
              ? false
              : console.log("blue"),
          color:
            this.state.number3.select === true
              ? "black"
              : this.state.number3.select === false
              ? "red"
              : console.log(this.state.number3.color)
        }
      };
    });
    console.log(this.state.number3.select);
    console.log(this.state.number3.color);
  };
  handlingSelect4 = () => {
    this.setState(prevState => {
      return {
        number4: {
          number: prevState.number4.number,
          select:
            prevState.number4.select === false
              ? true
              : prevState.number4.select === true
              ? false
              : console.log("blue"),
          color:
            this.state.number4.select === true
              ? "black"
              : this.state.number4.select === false
              ? "red"
              : console.log(this.state.number4.color)
        }
      };
    });
    console.log(this.state.number4.select);
    console.log(this.state.number4.color);
  };
  handlingSelect5 = () => {
    this.setState(prevState => {
      return {
        number5: {
          number: prevState.number5.number,
          select:
            prevState.number5.select === false
              ? true
              : prevState.number5.select === true
              ? false
              : console.log("blue"),
          color:
            this.state.number5.select === true
              ? "black"
              : this.state.number5.select === false
              ? "red"
              : console.log(this.state.number5.color)
        }
      };
    });
    console.log(this.state.number5.select);
    console.log(this.state.number5.color);
  };
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <div>
        {/* I mean: My DiceBox already takes in one number EACH (?) Do i still need another <Die /> (?) Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
              Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset (resetting is done in the next step).
              Have the dice reset (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll.*/}
        {/* {numbers.map((nums, col) => { */}
        {/* return ( */}
        <DiceBox
          onClick={() => {
            this.handlingSelect1(this.state.number1.select);
          }}
          // key={nums}
          color={this.state.number1.color}
          className="number1"
          p1={this.state.number1.number}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect2(this.state.number2.select);
          }}
          // key={nums}
          color={this.state.number2.color}
          className="number2"
          p1={this.state.number2.number}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect3(this.state.number3.select);
          }}
          // key={nums}
          color={this.state.number3.color}
          className="number3"
          p1={this.state.number3.number}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect4(this.state.number4.select);
          }}
          // key={nums}
          color={this.state.number4.color}
          className="number4"
          p1={this.state.number4.number}
        />
        <DiceBox
          onClick={() => {
            this.handlingSelect5(this.state.number5.select);
          }}
          // key={nums}
          color={this.state.number5.color}
          className="number5"
          p1={this.state.number5.number}
        />

        {/* ); */}
        {/* })} */}
        <button onClick={this.countingClicks}>ClickMe for New!</button>
      </div>
    );
  }
}
export default Home;
