import React, { Component } from "react";
import HeaderButtons from "./ButtonPerSquare";
import ReactDOM from "react-dom";

// import Paragraph from "./Paragraph";
import SquaresWrapper from "./squaresWrapper";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: { hex: "" },
      color2: { hex: "" },
      color3: { hex: "" },
      color4: { hex: "" }
    };
  }

  render() {
    return (
      <div className="creatorDiv">
        <HeaderButtons
          color1={this.state.color1.hex}
          color2={this.state.color2.hex}
          color3={this.state.color3.hex}
          color4={this.state.color4.hex}
          handleChange1={event =>
            this.setState({
              color1: { hex: event.target.value }
            })
          }
          handleChange2={event =>
            this.setState({
              color2: { hex: event.target.value }
            })
          }
          handleChange3={event =>
            this.setState({
              color3: { hex: event.target.value }
            })
          }
          handleChange4={event =>
            this.setState({
              color4: { hex: event.target.value }
            })
          }
          headerClass="HeaderDiv"
        />
        <button
          onMouseDown={() =>
            ReactDOM.render(
              <SquaresWrapper
                sectionClass="squaresWrapper"
                background1={this.state.color1.hex}
                // {this.state.color1}
                background2={this.state.color2.hex}
                // {this.state.color2}
                background3={this.state.color3.hex}
                // {this.state.color3}
                background4={this.state.color4.hex}
                // {this.state.color4}
              />,
              document.getElementById("blue")
            )
          }
        >
          Create Color
        </button>
        <div id="blue"></div>
      </div>
    );
  }
}
export default Home;
