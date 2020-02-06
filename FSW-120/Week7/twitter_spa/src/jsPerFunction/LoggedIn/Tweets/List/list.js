//   list/index.js
import React from "react";
import styled from "styled-components";
import data from "../../Data/Tweets";

// console.log(data.data.statuses[0]);
import axios from "axios";
import TweetPreview from "./TweetPreview";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
// axios.get("https://api.vschool.io/gmtnezschez/todo/").then(res => {
//   console.log(res.data);
// });
function List(props) {
  const getData = axios.get("https://api.vschool.io/gmtnezschez/todo/");
  let saveData = [];
  saveData.push(getData.data);
  // console.log(getData);
  return (
    <Container>
      {/* {console.log(props.tweets)} */}
      {props.tweets.map(tweet => {
        // console.log(tweet.id);
        return (
          <TweetPreview
            key={tweet.id}
            id={tweet.id}
            linkTo={}
            time={tweet.created_at}
            authorName={tweet.user.name}
            details={tweet.text}
          />
        );
      })}
      {/* {console.log(saveData)}
      {saveData.map(tweet => {
        return (
          <TweetPreview
            key={tweet._id}
            id={tweet._id}
            time={tweet.price}
            authorName={tweet.title}
            details={tweet.description}
          />
        );
      })} */}
      {/* the ones underneath here will be the ones for the post/put and delete requests */}
    </Container>
  );
}

export default List;
