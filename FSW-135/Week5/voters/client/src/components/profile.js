import React, { useContext } from "react";
import IssueForm from "./issue/issueForm";
import IssuesList from "./issue/issuesList.js";
import Issue from "./issue/issue.js";
import { UserContext } from "./../context/userProvider"

export default function Profile() {
    const { user: {name}, addIssue, issues} = useContext(UserContext)
  return (
      <div className="profile">
          <h1> What would you like to do {name}? </h1>
          <IssueForm addIssue={addIssue} />

          <IssuesList issues={issues}/>
    </div>
  );
}
