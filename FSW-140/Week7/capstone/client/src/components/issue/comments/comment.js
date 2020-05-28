import React, { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "./../../Grid/GridItem";
import GridContainer from "./../../Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "./../../Card/Card";
import CardHeader from "./../../Card/CardHeader.js";
import CardIcon from "./../../Card/CardIcon.js";
import CardBody from "./../../Card/CardBody.js";
import CardFooter from "./../../Card/CardFooter.js";
// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";
import styles from "./../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
// components/assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
const capitalize = (str) => {
  if (typeof str === "string") {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return "";
  }
};
const axios = Axios.create();

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default function Comment(props) {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  var {
    _id,

    text,
    upVotes,
    downVotes,
    voters,
    comments,
    title,
    description,
    userID,
    date,
  } = props;
  console.log(props);
  const [votes, setVotesState] = useState({
    upVotes: upVotes,
    downVotes: downVotes,
    errMsg: "",
    voters: voters,
  });
  console.log("votes state", votes);
  //console.log(_id, upVotes, downVotes, voters, comments, title, description, userID, date)
  return (
    <div id="comment">
      <p>{text}</p>
      <span>{date}</span>
    </div>
  );
}
