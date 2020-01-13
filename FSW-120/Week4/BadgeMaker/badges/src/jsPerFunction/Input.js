import React, { Component } from "react";
class Input extends Component {
  render() {
    return (
      <div className={this.props.classInput}>
        <input
          type={this.props.type}
          value={this.props.nameValue}
          onChange={event => this.props.handleChange(event)}
        />
        <h1 className={this.props.classh1}>{this.props.sp1}</h1>
      </div>
    );
  }
}
export default Input;
