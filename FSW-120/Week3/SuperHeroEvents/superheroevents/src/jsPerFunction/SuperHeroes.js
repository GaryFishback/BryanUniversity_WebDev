import React from "react";

class SuperHero extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={this.props.className}
        style={this.props.divStyle}
      >
        <h1>{this.props.h1}</h1>
        <h3>{this.props.h3}</h3>
        <img src={this.props.src} alt="" style={this.props.imgStyle}></img>
      </div>
    );
  }
}
export default SuperHero;
