import React from "react";
// class CheckBoxes extends React.Component {
//   render() {
//     const color = this.props.color;
//     console.log(color);
//     return (
//       <div className={this.props.className}>
//         <span>{this.props.sp1}</span>
//         <input
//           value={
//             this.props.class === "input1"
//               ? this.props.color1
//               : this.props.class === "input2"
//               ? this.props.color2
//               : this.props.class === "input3"
//               ? this.props.color3
//               : this.props.class === "input4"
//               ? this.props.color4
//               : console.log("blue")
//           }
//           style={{
//             borderColor: color === "" ? "white" : "none"
//           }}
//           type={this.props.type}
//           onChange={this.props.handleChange}
//           className={this.props.class}
//         />
//       </div>
//     );
//   }
// }

////my checkbox app() function
// function App() {
//     return (
// <div>
//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>
//         </div>
//     )
// }
// export default App;
// const numbers = ["1", "2", "3", "4"];
class CheckBoxes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color1: "",
  //     color2: "",
  //     color3: "",
  //     color4: ""
  //   };
  // }
  // handleChange = event => {
  //   this.setState = {
  //     color1: event.target.value,
  //     color2: event.target.value,
  //     color3: event.target.value,
  //     color4: event.target.value
  //   };
  //   console.log(this.state.color1);
  //   console.log(this.state.color2);
  //   console.log(this.state.color3);
  //   console.log(this.state.color4);
  // };
  render() {
    // const [initial, setInitial] = useState("#5e72e4");
    // const [color, setColor] = useState({});
    // let color;
    return (
      <div>
        <input
          type={this.props.type}
          className={this.props.class}
          value={
            this.props.class === "input1"
              ? this.props.color1
              : this.props.class === "input2"
              ? this.props.color2
              : this.props.class === "input3"
              ? this.props.color3
              : this.props.class === "input4"
              ? this.props.color4
              : console.log("blue")
            //   this.props.class === "input1"
            //     ? this.props.color1
            //     : this.props.class === "input2"
            //     ? this.props.color2
            //     : this.props.class === "input3"
            //     ? this.props.color3
            //     : this.props.class === "input4"
            //     ? this.props.color4
            //     : console.log("blue")
          }
          onChange={this.props.handleChange}
        />
        <div
          style={{
            width: 50,
            height: 50,
            marginBottom: 20,
            backgroundColor: this.props.color4
          }}
        ></div>
        <br />
        {/* <InputColor initialHexColor={initial} onChange={setColor} /> */}
      </div>
    );
  }
}
export default CheckBoxes;
