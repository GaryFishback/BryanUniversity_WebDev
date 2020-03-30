//   details/FullTweet.js
import React, { useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";

const DetailsSpan = styled.span`
  :hover {
    color: red;
  }
`;

// var tweetContent;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      imgUrl: "",
      author: "",
      id: ""
    };
  }
  componentDidMount = () => {
    axios.get("/tweets/").then(res => {
      console.log(res.data.tweets);
      this.setState({
        tweets: res.data.tweets
      });
    });
  };
  render() {
    //sp is for the span element in the Paragraph function.

    // console.log("fulltweet");
    // const storingData = tweet => {
    //   tweetContent = tweet;
    //   console.log(tweetContent);
    // };
    // const filteringTweet = iD => {
    //   data.data.statuses.filter(tweet => {
    //     console.log(tweet.id);
    //     tweet.id == iD ? storingData(tweet) : console.log(id);
    //   });
    // };
    console.log(props);
    return (
      <div id={props}>
        {console.log(useParams())}
        {props.blue}
        {/* <div> {filteringTweet(id)}</div> */}
        {/* <div>{tweetContent.text}</div>
      <div>{tweetContent.user.name}</div>
      <div>
        {console.log(tweetContent)}
        <DetailsSpan>{tweetContent.created_at}</DetailsSpan>
      </div> */}
      </div>
    );
  }
}

export default Details;
