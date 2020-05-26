import React from "react";

export default function Issue(props) {
  const {
    /* _id, upVotes, downVotes, voters, comments,userID, */ title,
    description,
    date,
  } = props;
  //console.log(_id, upVotes, downVotes, voters, comments, title, description, userID, date)
  return (
    <div id="issue">
      <h1>{title}</h1>
      <p>{date}</p>
      <h3>{description}</h3>
    </div>
  );
}
