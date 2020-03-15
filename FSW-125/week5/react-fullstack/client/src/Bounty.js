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
        <div>
          <a
            // href="http://localhost:3000/"
            style={{
              width: "50px",
              height: "50px",
              margin: "10px",
              left: "15em",
              display: "inline-block"
            }}
            className="button"
            onClick={e => this.props.del(e)}
          >
            <span
              id={this.props.id}
              style={{ paddingTop: "17px" }}
              className="button__text"
            >
              DEL
            </span>
          </a>
          <a
            // href="http://localhost:3000/"
            style={{
              width: "50px",
              height: "50px",
              margin: "10px",
              left: "15em",
              display: "inline-block"
            }}
            className="button"
            onClick={e => this.props.put(e)}
          >
            <span
              id={this.props.id}
              style={{ paddingTop: "17px" }}
              className="button__text"
            >
              PUT
            </span>
          </a>
          <h2 style={{ display: "inline-block", marginLeft: "-100px" }}>
            <span>WANTED!!! #{this.props.num}</span>
          </h2>
        </div>
        <h3>
          <span>Name: </span>
          {this.props.name}
        </h3>
        <h3>
          <span>Amount: </span> ${this.props.amount}
        </h3>
        <h3 style={{ display: "inline" }}>
          <span>Type: </span>
          {this.props.isLiving === true ? "ALIVE" : "DEAD"} {this.props.type}
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
