import React from "react";

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id={this.props.id}
        className={`${this.props.class}`}
        style={{
          backgroundColor: this.props.colors,
          width: "25em",
          height: "25em",
          paddingLeft: "5em",
          paddingTop: "2.5em",
          paddingBottom: "2.5em",
          borderRadius: "100px"
          //   margin: "20px"
        }}
      >
        <a
          href="http://localhost:3000/"
          style={{
            width: "50px",
            height: "50px",
            margin: "10px",
            left: "15em",
            display: "inline-block"
          }}
          id={this.props.id}
          className="button"
          onClick={e => this.props.del(e)}
        >
          <span
            style={{ paddingTop: "17px" }}
            className="button__text"
            id={this.props.id}
          >
            DEL
          </span>
        </a>
        <h2 style={{ display: "inline-block" }}>
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
          <br></br>
          <img src={this.props.img} alt=""></img>
        </h3>
      </div>
    );
  }
}

export default Squares;
