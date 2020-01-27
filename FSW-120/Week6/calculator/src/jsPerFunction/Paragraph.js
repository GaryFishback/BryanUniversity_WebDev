import React, { Component } from "react";
import style from "styled-components/macro";
import mediaMin from "./style/device";
import mediaMax from "./style/max-width";
class Paragraph extends Component {
  render() {
    const Input = style.input`
      /* Adapt the colors based on primary prop */
      background: ${props => (props.primary ? "gray" : "white")};
      color: ${props => (props.primary ? "white" : "gray")};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      width: ${props => (props.primary ? "6em" : "3em")};
    //   ${mediaMin.tablet`
    //   width: ${props => (props.primary ? "6em" : "1em")};
    // `}
    ${mediaMin.laptop`
    width: ${props => (props.primary ? "6em" : "3em")};
    `}
      border: 2px solid gray;
      border-radius: 3px;
    `;
    const FlexColumn = style.section`
     display: flex;
    justify-content: center;
    ${mediaMax.tablet`
    display: grid;
    justify-items: center;
align-text: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    //  flex-direction: column;
    //  margin-left: 35%;
    border-bottom: solid 5px white;
    border-top: solid 5px white;
    padding-left: 25%;padding-right: 25%;
    `} flex-direction: row;
 
`;
    return (
      <form name="additionForm">
        <FlexColumn className={this.props.className}>
          <h1 style={{ gridColumn: "span 2" }}>
            {this.props.operationHeading}
          </h1>
          <Input
            name={this.props.input1Name}
            onChange={event => this.props.onChange1(event)}
            type="number"
            value={this.props.input1}
          />{" "}
          <Input
            name={this.props.input2Name}
            onChange={event => this.props.onChange2(event)}
            type="number"
            value={this.props.input2}
          />
          <Input
            style={{ gridColumn: "span 2" }}
            id={this.props.id}
            onMouseDown={event => this.props.onSubmit(event)}
            primary
            type="submit"
            value={this.props.buttonText}
          />
          {/* <h1 id={this.props.headingID}>{this.props.operationFunction}</h1> */}
        </FlexColumn>
      </form>
    );
  }
}
export default Paragraph;
