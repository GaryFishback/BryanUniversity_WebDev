import React, { Component } from "react";
import IssueForm from "./issue/issueForm";
import IssuesList from "./issue/issuesList.js";

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      user: "",
      addIssue: "",
      issues: [],
      getUserIssues: "",
      errMsg: "",
    };
  }
  componentDidMount = () => {
    console.log(this.props.state);
    this.setState({
      user: this.props.state.user.name,
      addIssue: this.props.state.addIssue,
      issues: this.props.state.issues,
      getUserIssues: this.props.state.getUserIssues,
      errMsg: this.props.state.errMsg,
    });
    this.props.state.getUserIssues();
  };

  render() {
    return (
      <div className="profile">
        <h1> What would you like to do {this.state.user}? </h1>
        <IssueForm
          addIssue={this.state.addIssue}
          newIssue={(inputs) => {
            this.setState((prevState) => ({
              newIssue: inputs,
              issues: [...prevState.issues, inputs],
            }));
          }}
          errMsg={this.state.errMsg}
        />

        <IssuesList issues={this.state.issues} errMsg={this.state.errMsg} />
      </div>
    );
  }
}
