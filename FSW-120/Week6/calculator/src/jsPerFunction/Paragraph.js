import React, { Component } from "react";
import styled from "styled-components/macro";
class Paragraph extends Component {
  render() {
    const Button = styled.button`
      /* Adapt the colors based on primary prop */
      background: ${props => (props.primary ? "gray" : "white")};
      color: ${props => (props.primary ? "white" : "gray")};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid gray;
      border-radius: 3px;
    `;
    return (
      <div className={this.props.className}>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    );
  }
}
export default Paragraph;
