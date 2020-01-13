import React, { Component } from "react";
const typesArray = ["text", "text", "email", "text", "number", "text"];
const placeholdersArray = [
  "FirstName",
  "LastName",
  "Email",
  "PlaceofBirth",
  "Phone",
  "FavoriteFood"
];
var ifDisabled = false;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      textArea: "",
      FirstName: "",
      LastName: "",
      Email: "",
      PlaceofBirth: "",
      Phone: "",
      FavoriteFood: "",
      count: 0
      //false
    };
  }

  creatingBadge = () => {
    this.setState({
      count: this.state.count + 1
    });
    var div = document.createElement("div");
    div.id = "Badge";
    document.getElementById("Badges").append(div);
    var badgesHeading = document.createElement("h1");
    badgesHeading.style.background =
      this.state.count % 2 === 0 ? "red" : "blue";
    // console.log(this.state.count % 2);
    badgesHeading.textContent = "Badge: ";
    badgesHeading.className = "BadgeHeading";
    div.append(badgesHeading);
    const stateArray = [
      this.state.FirstName,
      this.state.LastName,
      this.state.Email,
      this.state.PlaceofBirth,
      this.state.Phone,
      this.state.FavoriteFood
    ];
    stateArray.map((state, nums) => {
      var h1 = document.createElement("h1");
      h1.textContent = placeholdersArray[nums] + ": " + state;

      div.append(h1);
    });
    // var pdiv = document.createElement("div");
    // document.getElementById("Badge").append(pdiv);
    var p = document.createElement("p");
    p.textContent = this.state.textArea;
    div.append(p);
  };
  handleClick = e => {
    this.state.textArea.length <= 3 ||
    this.state.FirstName.length <= 3 ||
    this.state.LastName.length <= 3 ||
    this.state.Email.length <= 3 ||
    this.state.PlaceofBirth.length <= 3 ||
    this.state.Phone.length <= 9 ||
    this.state.FavoriteFood.length <= 3
      ? (ifDisabled = true)
      : (ifDisabled = false);

    e.preventDefault();

    return ifDisabled === true ? null : this.creatingBadge();
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <main>
        <form className="form">
          {placeholdersArray.map((nums, type) => {
            const statesArray = [
              this.state.FirstName,
              this.state.LastName,
              this.state.Email,
              this.state.PlaceofBirth,
              this.state.Phone,
              this.state.FavoriteFood
            ];
            return (
              <input
                key={type}
                type={typesArray[type]}
                name={nums}
                placeholder={nums}
                value={statesArray[nums]}
                onChange={event => this.handleChange(event)}
                required
              />
            );
          })}
          <textarea
            name="textArea"
            placeholder="Tell us about yourself"
            value={this.state.textArea}
            rows="5"
            onChange={event => {
              const { name, value } = event.target;
              this.setState({
                [name]: value
              });
            }}
          />

          <button onClick={this.handleClick}>Submit</button>
        </form>
        <div id="Badges">
          {/* <h1>Badge:</h1> */}

          {/* {listArray.map(nums => {
            return <li key={nums}>{nums}</li>;
          })} */}
        </div>
      </main>
    );
  }
}
export default Home;
