import React from "react";
function Footer(props) {
  //   console.log(props);
  return (
    <footer className={props.className}>
      <div className="container">
        <div className="row">
          <a href="top">
            <div className="twitterWrap"> </div>
          </a>
          <a href="top">
            <div className="fbWrap"> </div>
          </a>
          <a href="top">
            <div className="githubWrap"> </div>
          </a>
        </div>{" "}
        <p className="copyright">Copyright © Your Website 2019</p>
      </div>
    </footer>
  );
}
export default Footer;
