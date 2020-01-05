import React from "react";

class DiceBox extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <p
        onClick={this.props.onClick}
        className={this.props.className}
        style={{ color: this.props.color }}
      >
        {this.props.p1}
      </p>
    );
  }
}
export default DiceBox;
