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

var tweetContent;

function Details(props) {
  var placeholderTweet = {
    author: "",
    author_image: "",
    tweet: ""
  };
  const { id } = useParams();
  // const { tweet_id } = useParams();
  const [tweets, setTweets] = useState(props.tweets);
  const [tweet, setTweet] = useState(placeholderTweet);
  // const [tweetDeleted, setTweetDeleted] = useState(false);

  if (tweet === placeholderTweet) {
    for (var i = 0; i < data.data.statuses.length; i++) {
      var singleTweet = tweets[i];
      if (parseInt(singleTweet.id) === parseInt(id)) {
        setTweet(singleTweet);
      }
    }
  }
  console.log("fulltweet");
  const storingData = tweet => {
    tweetContent = tweet;
    console.log(tweetContent);
  };
  const filteringTweet = iD => {
    data.data.statuses.filter(tweet => {
      console.log(tweet.id);
      tweet.id == iD ? storingData(tweet) : console.log(id);
    });
  };
  console.log(tweetContent);
  return (
    <div>
      blue tail
      <div> {filteringTweet(id)}</div>
      <div>{tweetContent.text}</div>
      <div>{tweetContent.user.name}</div>
      <div>
        {console.log(tweetContent)}
        <DetailsSpan>{tweetContent.created_at}</DetailsSpan>
      </div>
    </div>
  );
}

export default Details;
