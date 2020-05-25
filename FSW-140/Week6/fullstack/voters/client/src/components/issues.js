import React, { Component } from "react";
import IssuesList from "./issue/issuesList.js";
//import Issue from "./issue/issue.js";

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      issues: [],
    };
  }
  componentDidMount = () => {
    // const { allIssues, getIssues } = props;
    // if (!allIssues.length) {
    //   getIssues();
    // }

    this.props.getIssues();
    console.log(this.props);
    this.setState({
      issues: this.props.allIssues,
    });
  };

  render() {
    return (
      <div className="issuePage">
        <IssuesList issues={this.state.issues} />
      </div>
    );
  }
}
