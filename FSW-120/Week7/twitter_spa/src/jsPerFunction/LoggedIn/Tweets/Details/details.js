//   details/index.js
import React from "react";

import FullTweet from "./FullTweet";

function Details(props) {
  return (
    <div>
      <FullTweet id={props.id} />
    </div>
  );
}

export default Details;
