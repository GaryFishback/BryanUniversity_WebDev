// import React from "react";
// import ReactDOM from "react-dom";
// console.log("Blue");
// class Greeting extends React.Component {
//   render() {
//     return document.body.append(
//       (document.createElement("h1").textContent = "blue")
//     );
//   }
// }
// ReactDOM.render(<Greeting />, document.getElementById("root"));
const domContainer = document.querySelector("#like_button_container");

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "blue"
      },
      React.createElement(
        "button",
        {
          onClick: e => {
            e.preventDefault();
            this.state.liked = true;
            if (this.state.liked) {
              // const h1 = React.createElement("h1", null, "Liked This ");
              ReactDOM.render(
                React.createElement("h1", null, "Liked This "),
                document.getElementById("HeadingHere")
              );
            }
            console.log(this.state.liked);
          }
        },
        "Normal"
      ),
      React.createElement("button", null, "Primary"),
      React.createElement("div", {
        id: "HeadingHere"
      })
    );
  }
}
ReactDOM.render(e(LikeButton), domContainer);
//so this worked, but is too much of a huge mess just for two buttons tbh...
