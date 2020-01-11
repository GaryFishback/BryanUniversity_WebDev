import React, { Component } from "react";
import HeaderButtons from "./ButtonPerSquare";
import ReactDOM from "react-dom";

// import Paragraph from "./Paragraph";
import SquaresWrapper from "./squaresWrapper";
// const rollSound = new Audio(
//   "./../audio/Button_Push-Mike_Koenig-1659525069.wav"
// );
const backgrounds = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: { hex: backgrounds[0] },
      color2: { hex: backgrounds[1] },
      color3: { hex: backgrounds[2] },
      color4: { hex: backgrounds[3] }
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
          onMouseDown={() => {
            console.log(this.state.color1.hex);
            console.log(this.state.color2.hex);
            console.log(this.state.color3.hex);
            console.log(this.state.color4.hex);
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
            );
          }}
        >
          I Create/Update the Square!
        </button>
        <button
          onMouseDown={() => {
            this.setState(prevState => {
              return {
                color1: {
                  //to get a random number every time IF select is not true (text is red)
                  hex:
                    this.state.color1.hex === "#ffffff" ? "#000000" : "#ffffff"
                },
                color2: {
                  hex:
                    this.state.color2.hex === "#ffffff" ? "#000000" : "#ffffff"
                },
                color3: {
                  hex:
                    this.state.color3.hex === "#ffffff" ? "#000000" : "#ffffff"
                },
                color4: {
                  hex:
                    this.state.color4.hex === "#ffffff" ? "#000000" : "#ffffff"
                }
              };
            });
          }}
        >
          WhiteORBlack
        </button>
        <button
          onMouseDown={() => {
            this.setState(prevState => {
              return {
                color1: {
                  //to get a random number every time IF select is not true (text is red)
                  hex: "purple"
                },
                color2: {
                  hex: "purple"
                },
                color3: {
                  hex: prevState.color3.hex
                },
                color4: {
                  hex: prevState.color4.hex
                }
              };
            });
          }}
        >
          Top2GoPURPLE
        </button>
        <button
          onMouseDown={() => {
            this.setState(prevState => {
              return {
                color1: {
                  hex: prevState.color1.hex
                },
                color2: {
                  hex: prevState.color2.hex
                },
                color3: {
                  hex: "blue"
                },
                color4: {
                  hex: prevState.color4.hex
                }
              };
            });
          }}
        >
          LEFTBottom
        </button>
        <button
          onMouseDown={() => {
            // rollSound.play();

            this.setState(prevState => {
              return {
                color1: {
                  hex: prevState.color1.hex
                },
                color2: {
                  hex: prevState.color2.hex
                },
                color3: {
                  hex: prevState.color3.hex
                },
                color4: {
                  hex: "blue"
                }
              };
            });
          }}
        >
          RIGHTBottom
        </button>
        <div id="blue"></div>
      </div>
    );
  }
}
export default Home;
