import React, { Component } from "react";
class Squares extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="Square"
        style={{
          background:
            this.props.id === "square1"
              ? this.props.background1
              : this.props.id === "square2"
              ? this.props.background2
              : this.props.id === "square3"
              ? this.props.background3
              : this.props.id === "square4"
              ? this.props.background4
              : console.log("blue")
        }}
      >
        Blue
      </div>
    );
  }
}
export default Squares;
