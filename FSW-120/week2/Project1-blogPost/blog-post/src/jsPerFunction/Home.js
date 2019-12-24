import React from "react";
// import Paragraph from './Paragraph'
// import UList from "./List";
// import api from './apiToJs'
import "./../App.css";
// import numbers from "./makingObjects/keynumbers";
import Header from "./Header";

import BlogList from "./Bloglist";
import Footer from "./Footer";

function Home() {
  return (
    <div id="wrapper">
      <Header className="Header" />

      <BlogList className="BlogList" />

      <Footer className="Footer" />
    </div>
  );
}

export default Home;
