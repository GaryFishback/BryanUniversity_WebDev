import React, { useContext } from "react";
import IssueForm from "./issue/issueForm";
import IssuesList from "./issue/issuesList.js";

import { UserContext } from "./../context/userProvider"

export default function Profile() {
    const { user: {name}, addIssue, issues, errMsg} = useContext(UserContext)
    
    return (
      <div className="profile">
          <h1> What would you like to do {name}? </h1>
            <IssueForm addIssue={addIssue} errMsg={errMsg}/>

          <IssuesList issues={issues} errMsg={errMsg}/>
    </div>
  );
}
