import React, { Component } from "react";
import axios from "axios";
// import ReactDOM from "react-dom";
import "./App.css";
// import "./oklahoma/oklahoma.ttf";
import Bounty from "./Bounty";

class Bounties extends Component {
  constructor() {
    super();
    this.state = {
      bounties: "",
      colors: [
        "#A3E8FF", //fresh air
        "aquamarine",
        "#B2FF66", //"inchworm",
        "#FFFF75", //"unmellow yellow",
        "#F9E3D1", //champagne"
        "#FFA8A8", //salmon pink
        "#FFB5E8", //light hot pink
        "#D9A8FF", //mauve
        "#B2C6FF", //pale cornflower blue
        "#A3E8FF", //fresh air
        "aquamarine",
        "#B2FF66", //"inchworm",
        "#FFFF75", //"unmellow yellow",
        "#F9E3D1", //champagne"
        "#FFA8A8", //salmon pink
        "#FFB5E8", //light hot pink
        "#D9A8FF", //mauve
        "#B2C6FF" //pale cornflower blue
      ],
      changing: "",
      newBounty: {},
      counter: 0,
      amount: 0,
      firstName: "",
      type: "",
      lastName: "",
      photoUrl: "",
      updating: false,
      updatingID: 0
    };
  }
  componentDidMount = () => {
    axios
      .get("/bounties")
      .then(res => {
        this.setState({
          bounties: res.data.bounties
        });
        // console.log(this.state.bounties);

        // for (let i = 0; i < this.state.bounties.length; i++) {
        //   this.state.bounties[i] !== undefined
        //     ? console.log(this.state.bounties[i])
        //     : console.log(this.state.bounties[i].firstName);
        // }
      })
      .catch(err => console.log(err));
  };
  newBounty = () => {
    var newBounty = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      isLiving: true,
      bountyAmount: this.state.amount,
      type: this.state.type,
      imgUrl: this.state.photoUrl
    };

    console.log(newBounty);
    axios.post("/bounties", newBounty).then(res => {
      console.log(res);
      console.log(res.data.imgUrl);
      console.log(this.state);
    });

    this.setState(prevState => {
      return {
        bounties: [...prevState.bounties, newBounty]
      };
    });
    //   store.dispatch(countingBountys());
  };
  // displayData = () => {
  deleteOne = e => {
    console.log(e.target.id);
    axios.delete(`./bounties/${e.target.id}`).then(res => {
      console.log(res);
      alert(res.data);
    });
    var deleted = document.getElementsByTagName("div");
    console.log(deleted);
    for (let i = 0; i < deleted.length; i++) {
      deleted[i].id == e.target.id
        ? deleted[i].remove()
        : console.log(deleted[i]);
    }
  };
  updateOne = e => {
    console.log(e.target.id);
    this.setState({
      updating: true,
      updatingID: e.target.id
    });
    // var updating = document.getElementsByTagName("div");
    // console.log(updating);
    var div = document.getElementById(e.target.id);
    console.log(div.children);
    const inputFirstName = div.children[1].textContent
      .split(":")[1]
      .split(" ")[1];
    const inputLastName = div.children[1].textContent
      .split(":")[1]
      .split(" ")[2];
    const inputAmount = div.children[2].textContent.split("$")[1];
    const inputType = div.children[3].textContent.split(":")[1].split(" ")[2];
    const inputIsAlive = div.children[3].textContent
      .split(":")[1]
      .split(" ")[1];
    const inputUrl = div.children[4].children[2].src;

    // // console.log(inputType.split(" "));
    div.removeChild(div.children[1]);
    div.removeChild(div.children[1]);
    div.removeChild(div.children[1]);
    div.removeChild(div.children[1]);
    // var array = ["", "", "", "", ""];
    // ReactDOM.render(
    //   array.map(() => (
    //     <input style={{ display: "block", margin: "5px" }}></input>
    //   )),
    //   document.getElementById(e.target.id)
    // );
    for (var i = 0; i < 6; i++) {
      const input = document.createElement("input");
      input.style.display = "inline-block";
      input.style.margin = "5px";
      input.defaultValue =
        i === 0
          ? inputFirstName
          : i === 1
          ? inputLastName
          : i === 2
          ? inputAmount
          : i === 3
          ? inputType
          : i === 4
          ? inputIsAlive === "ALIVE"
            ? true
            : inputIsAlive == "true"
            ? true
            : false
          : i === 5
          ? inputUrl
          : console.log(e.target.id);
      input.placeholder =
        i === 0
          ? "inputFirstName"
          : i === 1
          ? "inputLastName"
          : i === 2
          ? "inputAmount"
          : i === 4
          ? "inputType"
          : i === 5
          ? "inputIsAlive"
          : i === 6
          ? "inputUrl"
          : console.log(e.target.id);
      div.append(input);
    }
    var buttonAnchorSubmit = document.createElement("a");
    div.append(buttonAnchorSubmit);
    buttonAnchorSubmit.className = "button";
    buttonAnchorSubmit.style.width = "100px";
    buttonAnchorSubmit.style.height = "50px";
    buttonAnchorSubmit.style.margin = "10px";
    // buttonAnchorSubmit.style.left = "15em";
    buttonAnchorSubmit.style.marginLeft = "25%";
    buttonAnchorSubmit.style.position = "relative";
    // buttonAnchorSubmit.style.left;
    buttonAnchorSubmit.style.display = "inline-block";
    buttonAnchorSubmit.id = e.target.id;

    var buttonSpanSubmit = document.createElement("span");
    buttonAnchorSubmit.append(buttonSpanSubmit);
    buttonSpanSubmit.textContent = "SUBMIT";
    buttonSpanSubmit.className = "button__text";
    buttonSpanSubmit.style.paddingTop = "17px";
    buttonSpanSubmit.id = e.target.id;
    // buttonSpanSubmit.id = num;
    buttonAnchorSubmit.addEventListener("click", e => {
      const living = div.children[5].value;
      console.log(living);
      const updates = {
        firstName: div.children[1].value,
        lastName: div.children[2].value,
        isLiving:
          living === true
            ? true
            : living === "true"
            ? true
            : living === false
            ? false
            : living === "false"
            ? false
            : console.log(living),
        bountyAmount: div.children[3].value,
        type: div.children[4].value,
        imgUrl: div.children[6].value
      };
      // console.log(updates);
      axios.put(`/bounties/${e.target.id}`, updates).then(res => {
        console.log(res.data);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        div.removeChild(div.children[1]);
        var name = document.createElement("h3");
        var amount = document.createElement("h3");
        var type = document.createElement("h3");
        var imgUrl = document.createElement("h3");
        div.append(name, amount, type, imgUrl);
        var nameSpan = document.createElement("span");
        var amountSpan = document.createElement("span");
        var typeSpan = document.createElement("span");
        var imgUrlSpan = document.createElement("span");

        name.append(nameSpan);
        amount.append(amountSpan);
        type.append(typeSpan);
        imgUrl.append(imgUrlSpan);

        nameSpan.textContent = `Name: `;
        amountSpan.textContent = `Amount: `;
        typeSpan.textContent = `Type: `;
        imgUrlSpan.textContent = `Photo: `;

        name.append(`${res.data.firstName} ${res.data.lastName}`);
        amount.append(`$${res.data.bountyAmount}`);
        type.append(
          `${res.data.isLiving === true ? "ALIVE" : "DEAD"} ${res.data.type}`
        );

        const imgBreak = document.createElement("br");
        const img = document.createElement("img");
        imgUrl.append(imgBreak, img);
        img.src = `${res.data.imgUrl}`;
        // div.removeChild(div.children[1]);

        // <h3>
        //   <span>Photo:</span>
        //   <br></br>
        //   <img src={this.props.img} alt=""></img>
        // </h3>
      });
    });
  };
  // };
  render() {
    return (
      <div id="wrapper" /*style={{ fontFamily: "oklahoma" }}*/>
        {this.state.bounties !== ""
          ? this.state.bounties.map((bounty, num) => {
              return (
                <Bounty
                  class={"box" + (num + 1)}
                  colors={this.state.colors[num]}
                  id={bounty._id}
                  del={this.deleteOne}
                  put={this.updateOne}
                  key={num}
                  num={num + 1}
                  name={`${bounty.firstName} ${bounty.lastName}`}
                  amount={bounty.bountyAmount}
                  type={bounty.type}
                  isLiving={bounty.isLiving}
                  img={bounty.imgUrl}
                />
              );
            })
          : console.log("loading")}
        <form
          id="form"
          style={{
            paddingTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "100px",
            width: "60%",
            margin: "0 auto",
            height: "25vw",
            marginTop: 50
          }}
          // onClick={e => {}}
        >
          <h1> Adding a New Bounty!</h1>
          <section>
            <input
              placeholder="First Name:"
              onChange={e => {
                this.setState({
                  firstName: e.target.value
                });
              }}
            ></input>{" "}
            <input
              placeholder="Last Name: "
              onChange={e => {
                console.log(e.target.value);
                this.setState({
                  lastName: e.target.value
                });
                console.log(this.state.lastName);
              }}
            ></input>
            <input
              onChange={e => {
                this.setState({
                  amount: e.target.value
                });
              }}
              placeholder="Amount:"
              type="number"
            ></input>
            <input
              onChange={e => {
                this.setState({
                  type: e.target.value
                });
              }}
              placeholder="Type:"
            ></input>{" "}
            <input
              onChange={e => {
                this.setState({
                  photoUrl: e.target.value
                });
              }}
              placeholder="Photo Url"
            ></input>
          </section>
          <br></br>
          <a
            // href="http://localhost:3000/"
            className="button"
            onClick={this.newBounty}
          >
            <span className="button__text">SAVE</span>
          </a>
        </form>
      </div>
    );
  }
}

export default Bounties;
