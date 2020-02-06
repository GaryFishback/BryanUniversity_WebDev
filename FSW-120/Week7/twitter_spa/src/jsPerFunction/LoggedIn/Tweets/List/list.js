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
        // console.log(tweet.id); of course the .map worked fine. 
        return (
          <TweetPreview
            key={tweet.id}
            id={tweet.id}
            linkTo={`LoggedIn/${tweet.id}`}
            time={tweet.created_at}
            authorName={tweet.user.name}
            details={tweet.text}
          />
        );
      })}   {/* the ones underneath here will be the ones for the post/put and delete requests */}
      {/* {console.log(saveData)} .map on the data however, did not. I tried with the normal .then syntax on the get request and that went even worse.. 
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
   
    </Container>
  );
}

export default List;
