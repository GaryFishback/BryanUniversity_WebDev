import React, { Component } from "react";
class Paragraph extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.p1}</p>
      </div>
    );
  }
}
export default Paragraph;
