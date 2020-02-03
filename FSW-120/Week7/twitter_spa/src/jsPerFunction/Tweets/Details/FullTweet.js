//   details/FullTweet.js
import React from "react";
// import axios from "axios";
import data from "../../Data/Tweets";
import styled from "styled-components";

const DetailsSpan = styled.span`
  :hover {
    color: red;
  }
`;

var tweetContent;
// console.log(
//   data.data.statuses.filter(tweet => {
//     tweet.id === 1125490788736032800 ? console.log(tweet) : console.log("yey");
//   })
// );
//use this id to filter through your array of tweets somewhere and pull out those properties to define the component details here
function Details({ id }) {
  const storingData = tweet => {
    tweetContent = tweet;
    console.log(tweetContent);
  };
  const filteringTweet = iD => {
    data.data.statuses.filter(tweet => {
      tweet.id == iD ? storingData(tweet) : console.log(id);
    });
  };
  return (
    <div>
      {" "}
      {filteringTweet(id)}
      <div>X</div>
      <div>{tweetContent.text}</div>
      <div>{tweetContent.user.screen_name}</div>
      <div>
        <DetailsSpan>{tweetContent.created_at}</DetailsSpan>
      </div>
    </div>
  );
}

export default Details;
