import React from "react";
class CheckBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { NewColor: "" };
  }

  handleChange(e) {
    this.setState({ NewColor: e.target.value });
  }

  render() {
    const NewColor = this.state.NewColor;
    return (
      <div className={props.className}>
        <span>{props.sp1}</span>
        <input
          value={NewColor}
          onChange={this.handleChange}
          type={props.type}
          defaultValue={props.value}
          className={props.class}
        />
      </div>
    );
  }
}
export default CheckBoxes;

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
