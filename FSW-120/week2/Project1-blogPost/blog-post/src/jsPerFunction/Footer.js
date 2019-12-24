import React from "react";
function Footer(props) {
  //   console.log(props);
  return (
    <footer className={props.className}>
      <div className="container">
        <div className="row">
          <div className="twitterWrap">
            <a href="top">
              <span></span>
            </a>
          </div>
          <a href="top">
            <span className="facebook">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="top">
            <span className="github">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <p className="copyright text-muted">Copyright © Your Website 2019</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
