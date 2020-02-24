import React, { Component } from "react";
import {
  Headings,
  PHeading,
  Tweet,
  TweetCheckbox,
  Button
} from "./style/styles";
class TweetTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      isCompleted: "",
      created_at: "", //date
      id: "",
      id_str: "",
      img: "", //imgUrl
      text: "", // description
      name: "" //user.name = title
    };
  }
  render() {
    return (
      <Tweet
        className="tweetfield"
        id={this.props.id}
        onClick={this.props.clickTweet}
      >
        <Headings id={this.props.id}> {this.props.username}</Headings>
        <Headings id={this.props.id}>{this.props.date}</Headings>{" "}
        {/* <Button primary onClick={e => this.props.handleClick(e)}>
          Toggler
        </Button> */}
        {/* <div></div>
        <div></div> */}
        {this.props.children}
        {/* <div style={{ gridColumn: "span 2", display: "flex" }}> */}
        {/* {" "} */}
        {/* <TweetCheckbox
            value={this.props.checkboxValue}
            checked={this.props.ifChecked}
            type="checkbox"
            // onChange={() => {
            //   console.log("not going to change");
            // }}
          ></TweetCheckbox> */}
        <img
          id={this.props.id}
          alt=""
          style={{
            width: "80%",
            height: "auto",
            maxHeight: "80%",
            alignSelf: "center"
          }}
          src={this.props.imgUrl}
        ></img>
        {/* </div>{" "} */}
        {/* <br></br> */}
      </Tweet>
    );
  }
}
export default TweetTemplate;
