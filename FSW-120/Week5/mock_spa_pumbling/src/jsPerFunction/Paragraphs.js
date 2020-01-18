import React, { Component } from "react";
class Paragraphs extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.sp1}</p>
      </div>
    );
  }
}
export default Paragraphs;
