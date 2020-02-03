//   details/FullTweet.js
import React from "react";
// import axios from "axios";
import data from "../../Data/Tweets";
// import styled from "styled-components";

var tweetContent;
// console.log(
//   data.data.statuses.filter(tweet => {
//     tweet.id === 1125490788736032800 ? console.log(tweet) : console.log("yey");
//   })
// );
//use this id to filter through your array of tweets somewhere and pull out those properties to define the component details here
function Details({ id }) {
  const filteringTweet = iD => {
    return data.data.statuses.filter(tweet => {
      const storingData = tweet => {
        tweetContent = tweet;
        console.log(tweetContent);
        return (
          <div>
            X<div>{tweetContent.text}</div>
            <div>{tweetContent.user.screen_name}</div>
            <div>
              <span>{tweetContent.created_at}</span>
            </div>
          </div>
        );
      };
      tweet.id_str === iD ? storingData(tweet) : console.log(tweet);
    });
  };

  return (
    <div>
      {filteringTweet(id)}
      {console.log(data.data.statuses[0])}
    </div>
  );
}

export default Details;
