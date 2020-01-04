import React from "react";
// class CheckBoxes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { color: "" };
//   }

//   handleChange(e) {
//     this.props.onColorChange(e.target.value;
//   }

//   render() {
//     const color = this.props.color;
//     console.log(color);
//     return (
//       <div className={this.props.className}>
//         <span>{this.props.sp1}</span>
//         <input
//           style={{
//             height: this.props.border,
//             borderColor: color === "" ? "white" : "none"
//           }}
//           type={this.props.type}
//           value={this.props.color}
//           onChange={this.handleChange}
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

class CheckBoxes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { color: "" };
  // }

  // handleChange = event => {
  //   this.setState({ color: event.target.value });
  // };
  render() {
    // const [initial, setInitial] = useState("#5e72e4");
    // const [color, setColor] = useState({});

    return (
      <div>
        <input
          type="color"
          value={this.props.color}
          onChange={this.props.handleChange}
        />
        <div
          style={{
            width: 50,
            height: 50,
            marginBottom: 20,
            backgroundColor: this.props.backgroundColor
          }}
        ></div>
        <br />
        {/* <InputColor initialHexColor={initial} onChange={setColor} /> */}
      </div>
    );
  }
}
export default CheckBoxes;
