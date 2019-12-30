import React from "react";
// import Paragraph from './Paragraph'
// import UList from "./List";
// import api from './apiToJs'
import "./../css/header.css";
import "./../css/App.css";
import "./../css/navbar.css";
// import numbers from "./makingObjects/keynumbers";
import Header from "./Header";

import BlogList from "./Bloglist";
import Footer from "./Footer";

function Home() {
  return (
    <div id="wrapper">
      <Header className="Header" />

      <BlogList className="BlogList" />
      <hr id="lasthr" />
      <Footer className="Footer" />
    </div>
  );
}

export default Home;
