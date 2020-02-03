//   list/TweetPreview.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-width: 600px;
  height: auto;
  // background: grey;
  color: black;
  text-align: left;
  font-size: 1em;
  margin-bottom: 15px;
  overflow: hidden;
  :hover {
    background-color: rgb(180, 214, 235);
  }
`;

//any component that consumes lots of props
function TweetPreview({ id, details, authorName, time, ...rest }) {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Container {...rest}>
        <div>X</div>
        <div>{details}</div>
        <div>{authorName}</div>
        <div>
          <span>{time}</span>
        </div>
      </Container>
    </Link>
  );
}

export default TweetPreview;
