import React, { Component } from "react";
import Paragraph from "./Paragraph";
import style from "styled-components/macro";
import mediaMin from "./style/device";
import mediaMax from "./style/max-width";

const operationsArray = ["+", "-", "*", "/"];
const wordsArray = ["Add", "Substract", "Multiply", "Divide"];
const headingArray = [
  "Addition Form: ",
  "Substraction Form: ",
  "Multiplication Form: ",
  "Division Form: "
];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      input10: "",
      input20: "",
      input11: "",
      input21: "",
      input12: "",
      input22: "",
      input13: "",
      input23: "",
      clicked: false,
      operation: ""
    };
  }
  operationFunction = () => {};
  blueFunction = (num1, num2, operation) => {
    console.log(num1);
    console.log(num2);
    console.log(operation);
    if (this.state.clicked === true) {
      return operation === "+"
        ? num1 + num2
        : operation === "-"
        ? num1 - num2
        : operation === "*"
        ? num1 * num2
        : operation === "/"
        ? num1 / num2
        : console.log("blue");
    }
  };
  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      clicked: false
    });
  };
  render() {
    const Background = style.section`
    
      /* Adapt the colors based on primary prop */
      justify-content: center;
      margin-top: 10em;
      background: ${props => (props.primary ? "grey" : "lightgrey")};
      ${mediaMax.tablet`
      background:rgba(211, 211, 211, 0.555) `}
      padding: 2%;
    
    `;

    const Heading = style.h1`
    // text-decoration: ${props => (props.primary ? "underline" : "none")};
    text-align: center;
   margin-left: 40%;
   border: ${props => (props.primary ? "none" : "double 3px black")};
  // border: double 3px black;
  border-bottom: ${props =>
    props.primary ? "double 3px black" : "double 3px black"};
  max-width: 15em;
  ${mediaMin.laptop`
   margin-left: 42%;
  `}
  ${mediaMin.laptopM`
   margin-left: 44%;
  `}
  ${mediaMin.laptopL`
   margin-left: 46%;
  `}
  ${mediaMin.laptopLL`
   margin-left: 46%;
  `}
  ${mediaMin.desktop`
   margin-left: 46%;
  `}
  ${mediaMax.tablet`
   margin-left: 40%;
   
  `}
  
  max-width: ${props => (props.primary ? "4em" : "6em")};
 
`;

    // const FlexColumn = style.section`
    // display: flex;
    // flex-direction: column;
    // justify-content: center`;
    //sp is for the span element in the Paragraph function.
    return (
      <div>
        <Background id="wrapper">
          <Heading primary>Calculator</Heading>
          {operationsArray.map((op, words) => {
            console.log([words]);
            return (
              <Paragraph
                key={op}
                id={op}
                input1={
                  [words] == 0
                    ? this.state.input10
                    : [words] == 1
                    ? this.state.input11
                    : [words] == 2
                    ? this.state.input12
                    : [words] == 3
                    ? this.state.input13
                    : console.log("line 85")
                }
                input2={
                  [words] == 0
                    ? this.state.input20
                    : [words] == 1
                    ? this.state.input21
                    : [words] == 2
                    ? this.state.input22
                    : [words] == 3
                    ? this.state.input23
                    : console.log("line 97")
                }
                input1Name={`input1${[words]}`}
                input2Name={`input2${[words]}`}
                onChange1={this.onChange}
                onChange2={this.onChange}
                operationHeading={headingArray[words]}
                // headingID={
                //   [words] == 0
                //     ? "adding"
                //     : [words] == 1
                //     ? "substracting"
                //     : [words] == 2
                //     ? "multiplying"
                //     : [words] == 3
                //     ? "dividing"
                //     : console.log("line 85")
                // }

                onSubmit={event => {
                  console.log(event.target.id);
                  event.preventDefault();
                  this.setState({
                    clicked: true,
                    operation: event.target.id
                  });
                  this.state.operation === "+"
                    ? this.blueFunction(
                        Number(this.state.input10),
                        Number(this.state.input20),
                        this.state.operation
                      )
                    : this.state.operation === "-"
                    ? this.blueFunction(
                        Number(this.state.input11),
                        Number(this.state.input21),
                        this.state.operation
                      )
                    : this.state.operation === "*"
                    ? this.blueFunction(
                        Number(this.state.input12),
                        Number(this.state.input22),
                        this.state.operation
                      )
                    : this.state.operation === "/"
                    ? this.blueFunction(
                        Number(this.state.input13),
                        Number(this.state.input23),
                        this.state.operation
                      )
                    : console.log("Blue");
                }}
                className="addition"
                buttonText={wordsArray[words]}
              />
            );
          })}
          <Heading>
            =
            {this.state.operation === "+"
              ? this.blueFunction(
                  Number(this.state.input10),
                  Number(this.state.input20),
                  this.state.operation
                )
              : this.state.operation === "-"
              ? this.blueFunction(
                  Number(this.state.input11),
                  Number(this.state.input21),
                  this.state.operation
                )
              : this.state.operation === "*"
              ? this.blueFunction(
                  Number(this.state.input12),
                  Number(this.state.input22),
                  this.state.operation
                )
              : this.state.operation === "/"
              ? this.blueFunction(
                  Number(this.state.input13),
                  Number(this.state.input23),
                  this.state.operation
                )
              : console.log("Blue")}
          </Heading>
        </Background>
      </div>
    );
  }
}
export default Home;
