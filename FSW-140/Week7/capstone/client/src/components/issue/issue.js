import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CommentForm from "./comments/commentForm";
import CommentList from "./comments/commentList";
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
import Delete from "@material-ui/icons/Delete";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "./../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "../Card/Card";
import CardHeader from "./../Card/CardHeader.js";
import CardIcon from "./../Card/CardIcon.js";
import CardBody from "./../Card/CardBody.js";
import CardFooter from "./../Card/CardFooter.js";
// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";
import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
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

export default function Issue(props) {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  var {
    _id,
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
  const [commentsState, setCommentsState] = useState({
    comments: [],
    errMsg: "",
    issueID: _id,
  });
  console.log("votes state", votes);
  //console.log(_id, upVotes, downVotes, voters, comments, title, description, userID, date)
  const handleAuthErr = (errMsg) => {
    console.dir(errMsg);
    setCommentsState((prevState) => ({
      errMsg,
    }));
  };
  const addComment = (e, newComment) => {
    console.log(e.target.id);
    console.log(newComment);
    axios
      .post(`http://localhost:3030/app/comments/${e.target.id}`, newComment)
      .then((res) => {
        console.log("new issue res.data", res.data);
        setCommentsState((prevState) => ({
          comments: [...prevState.comments, res.data],
        }));
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.errMsg) {
          handleAuthErr(err.response.data.errMsg);
        }
      });
  };
  return (
    <div id="issue">
      {/* <GridItem sm={10}> */}
      <Card plain>
        <CardHeader color="info">
          {/* <ChartistGraph
              className="ct-chart"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            /> */}
          <p className={classes.cardCategory}>
            <span className={classes.whiteText}>{capitalize(description)}</span>
          </p>
        </CardHeader>
        <CardBody>
          <h4
            style={{ display: "flex", justifyContent: "space-between" }}
            className={classes.cardTitle}
          >
            {capitalize(title)}
            <span
              id={_id}
              onMouseOver={(e) => {
                e.target.style.color = "orange";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "red";
              }}
              onClick={(e) => {
                console.log(e.currentTarget);
                console.log(loggedUser._id);

                axios
                  .delete(
                    `http://localhost:3030/app/issues/${e.currentTarget.id}`
                  )
                  .then((res) => {
                    console.log(res);
                    alert("Seccesfully Deleted Issue");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <Delete style={{ color: "red" }} />
            </span>
          </h4>
          <p className={classes.cardCategory}>
            <span className={classes.infoText}>
              <ArrowUpward
                onClick={() => {
                  console.log("_id", _id);
                  console.log("upvotes", upVotes);
                  console.log("voters", voters);
                  console.log("comments", comments);
                  console.log("userID", userID);
                  var ifVoted = votes.voters.findIndex((voter) => {
                    console.log(voter.userID);
                    console.log(loggedUser._id);
                    return (
                      voter.userID === loggedUser._id &&
                      voter.voted === "upvoted"
                    );
                  });
                  console.log("ifVoted", ifVoted);
                  if (ifVoted < 0) {
                    axios
                      .put(`http://localhost:3030/app/issues/${_id}/upVote`, {})
                      .then((res) => {
                        console.log(res);
                        setVotesState((prevState) => ({
                          ...prevState,
                          upVotes: res.data.upVotes,
                          errMsg: "",
                          voters: [
                            ...prevState.voters,
                            { userID: loggedUser._id, voted: "upvoted" },
                          ],
                        }));
                      })
                      .catch((err) => {});
                  } else {
                    setVotesState((prevState) => ({
                      ...prevState,
                      errMsg: "you can only upvote once",
                    }));
                  }
                }}
                className={classes.upArrowCardCategory}
              />{" "}
              {votes.upVotes}
              <ArrowDownward
                onClick={() => {
                  console.log("_id", _id);
                  console.log("downvotes", downVotes);
                  console.log("userID", userID);
                  var ifVoted = votes.voters.findIndex((voter) => {
                    console.log(voter.userID);
                    console.log(loggedUser._id);
                    console.log(voter.voted);
                    return (
                      voter.userID === loggedUser._id &&
                      voter.voted === "downvoted"
                    );
                  });
                  console.log("ifVoted", ifVoted);
                  if (ifVoted < 0) {
                    axios
                      .put(
                        `http://localhost:3030/app/issues/${_id}/downVote`,
                        {}
                      )
                      .then((res) => {
                        console.log(res);
                        setVotesState((prevState) => ({
                          ...prevState,
                          downVotes: res.data.downVotes,
                          errMsg: "",
                          voters: [
                            ...prevState.voters,
                            { userID: loggedUser._id, voted: "downvoted" },
                          ],
                        }));
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    setVotesState((prevState) => ({
                      ...prevState,
                      errMsg: "you can only downvote once",
                    }));
                  }
                }}
                className={classes.downArrowCardCategory}
              />{" "}
              {votes.downVotes} {}
            </span>{" "}
            <span>{votes.errMsg}</span>
          </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> {date}
          </div>
        </CardFooter>
        <CardFooter chart>
          <Container style={{ display: "block" }}>
            <CommentForm
              addComment={addComment}
              errMsg={commentsState.errMsg}
              issueId={_id}
            />
            <Button
              id={_id}
              onClick={() => {
                const getIssueComments = () => {
                  console.log(axios);
                  axios
                    .get(`http://localhost:3030/app/comments/issue/${_id}`)
                    .then((res) => {
                      console.log("res.data", res.data);
                      setCommentsState((prevState) => ({
                        comments: res.data || [],
                      }));
                      console.log(res.data);

                      if (res.data.length === 0) {
                        setCommentsState((prevState) => ({
                          comments: [{ text: "NO COMMENTS HERE; ADD ONE!" }],
                        }));
                      }
                      // localStorage.setItem("IssuesByUser", JSON.stringify(res.data));
                    })
                    .catch((err) => {
                      console.log(err);
                      if (
                        err.response &&
                        err.response.data &&
                        err.response.data.errMsg
                      ) {
                        handleAuthErr(err.response.data.errMsg);
                      }
                    });
                };

                getIssueComments();
                // console.log(this.state);
                // this.setState({
                //   user: this.props.state.user,
                //   addComment: this.props.state.addComment,
                //   issues: this.props.state.issues,
                //   getUserIssues: this.props.state.getUserIssues,
                //   errMsg: this.props.state.errMsg,
                // });
                // console.log("this.state.user", this.props.state.user);
                console.log(commentsState);
              }}
            >
              View Comments
            </Button>
          </Container>
        </CardFooter>{" "}
        <CardFooter chart>
          <div className={classes.stats} id="commentsSection">
            <CommentList
              comments={commentsState.comments}
              user={loggedUser}
              // errMsg={this.state.errMsg}
            />
          </div>
        </CardFooter>
      </Card>
      {/* </GridItem> */}
    </div>
  );
}
