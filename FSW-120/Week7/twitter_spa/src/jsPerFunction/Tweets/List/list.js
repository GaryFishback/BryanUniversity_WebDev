//   list/index.js
import React from "react";
import styled from "styled-components";
import data from "../../Data/Tweets";
import TweetPreview from "./TweetPreview";
// console.log(data.data.statuses[0]);
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const paragraphString = "Hello World";

//an array of objects up here somewhere

//const listOfTweets = array.map((tweet) => {return <div> each indivdual tweet preview <div/>})

function List() {
  return (
    <Container>
      {data.data.statuses.map(tweet => {
        console.log(tweet.id);
        return (
          <TweetPreview
            key={tweet.id_str}
            id={tweet.id}
            time={tweet.created_at}
            authorName={tweet.user.name}
            details={tweet.text}
          />
        );
      })}

      <TweetPreview
        textAlign="left"
        time="yesterday"
        authorName="author author"
        details="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        background="lightblue"
        color="white"
        id="author-author"
      />
      <TweetPreview
        textAlign="center"
        time="whenever"
        authorName="another author"
        details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        background="lightgreen"
        color="black"
      />
    </Container>
  );
}

export default List;