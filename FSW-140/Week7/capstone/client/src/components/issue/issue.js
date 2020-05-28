import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CommentForm from "./comments/commentForm";
import CommentList from "./comments/commentList";
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import Delete from "@material-ui/icons/Delete";

// import GridItem from "./../Grid/GridItem";
// import GridContainer from "../Grid/GridContainer.js";

import Card from "../Card/Card";
import CardHeader from "./../Card/CardHeader.js";
// import CardIcon from "./../Card/CardIcon.js";
import CardBody from "./../Card/CardBody.js";
import CardFooter from "./../Card/CardFooter.js";
import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
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
    // voters,
    // comments,
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
    // voters: voters,
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
    <div id="issue" className={_id}>
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
                var id = e.currentTarget.id;
                axios
                  .delete(
                    `http://localhost:3030/app/issues/${e.currentTarget.id}`
                  )
                  .then((res) => {
                    console.log(res);
                    console.log(id);
                    alert("Seccesfully Deleted Issue");
                    var div = document.getElementsByClassName(id)[0];

                    div.remove();
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
                  // console.log("voters", voters);
                  // console.log("comments", comments);
                  console.log("userID", userID);

                  axios
                    .put(`http://localhost:3030/app/issues/${_id}`, {
                      upVotes: votes.upVotes + 1,
                    })
                    .then((res) => {
                      console.log(res);
                      setVotesState((prevState) => ({
                        ...prevState,
                        upVotes: votes.upVotes + 1,
                        errMsg: "",
                      }));
                    })
                    .catch((err) => {});
                }}
                className={classes.upArrowCardCategory}
              />{" "}
              {votes.upVotes}
              <ArrowDownward
                onClick={() => {
                  console.log("_id", _id);
                  console.log("downvotes", downVotes);
                  console.log("userID", userID);
                  // var ifVoted = votes.voters.findIndex((voter) => {
                  //   console.log(voter.userID);
                  //   console.log(loggedUser._id);
                  //   console.log(voter.voted);
                  //   return (
                  //     voter.userID === loggedUser._id &&
                  //     voter.voted === "downvoted"
                  //   );
                  // });
                  // console.log("ifVoted", ifVoted);
                  // if (ifVoted < 0) {
                  axios
                    .put(`http://localhost:3030/app/issues/${_id}`, {
                      downVotes: votes.downVotes + 1,
                    })
                    .then((res) => {
                      console.log(res);
                      setVotesState((prevState) => ({
                        ...prevState,
                        downVotes: votes.downVotes + 1,
                        errMsg: "",
                      }));
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  // } else {
                  //   setVotesState((prevState) => ({
                  //     ...prevState,
                  //     errMsg: "you can only downvote once",
                  //   }));
                  // }
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
