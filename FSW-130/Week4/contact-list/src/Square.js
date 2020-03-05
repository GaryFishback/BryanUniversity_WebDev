import React from "react";

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`${this.props.class}`}
        style={{
          backgroundColor: this.props.colors,
          width: "25em",
          height: "25em",
          paddingLeft: "5em",
          paddingTop: "5em",
          borderRadius: "100px"
          //   margin: "20px"
        }}
      >
        <h2>
          <span>Contact #{this.props.num}</span>
        </h2>
        <h3>
          <span>Name: </span> {this.props.name}
        </h3>
        <h3>
          <span>Phone: </span> {this.props.phone}
        </h3>
        <h3>
          <span>Email: </span> {this.props.email}
        </h3>
        <h3>
          <span>Photo:</span>
          <img src={this.props.img}></img>
        </h3>
      </div>
    );
  }
}

export default Squares;
