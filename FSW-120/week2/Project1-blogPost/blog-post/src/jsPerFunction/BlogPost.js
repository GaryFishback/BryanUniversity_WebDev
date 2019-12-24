import React from "react";
// import postApi from "./makingObjects/PostApi";
function BlogPost(props) {
  //   console.log(props);
  return (
    <div className={props.className}>
      <a href={props.href}>
        <h2>{props.title}</h2> <h3>{props.subtitle}</h3>
      </a>
      <p>
        {" "}
        Posted By {props.author} on {props.date}
      </p>
      <hr />
    </div>
  );
}
export default BlogPost;
