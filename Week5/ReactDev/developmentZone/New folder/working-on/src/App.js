//App.js

import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

// import GlobalStyle from './Theme/GlobalStyle'
// import Landing from "../../Landing/landing";
import Details from "./Tweets/Details/details";
import Footer from "./Footer/footer";
import Navbar from "./Navigation/navbar";
import List from "./Tweets/List/list";

function App() {
  return (
    <div>
      <Navbar />
      {/* <GlobalStyle /> */}
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/:id" component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
