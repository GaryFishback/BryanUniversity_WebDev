import React, { Component } from "react";
class Squares extends Component {
  render() {
    return (
      <div id={this.props.id} className="Square" style={this.props.styleSquare}>
        Blue
      </div>
    );
  }
}
export default Squares;
