//   details/FullTweet.js
import React, { useState } from "react";
// import axios from "axios";
import data from "../../Data/Tweets";
import styled from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";

const DetailsSpan = styled.span`
  :hover {
    color: red;
  }
`;

// var tweetContent;

function Details(props) {
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
  console.log(props.id);
  return (
    <div id={props.id}>
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

export default Details;
