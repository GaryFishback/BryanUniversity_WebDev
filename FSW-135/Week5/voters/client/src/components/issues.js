import React, { useState } from "react";
import IssuesList from "./issue/issuesList.js";
import Issue from "./issue/issue.js";

export default function IssuePage(props) {

        const { allIssues } = props

   
    return <div className="issuePage">
        <IssuesList issues={allIssues}/> 
    </div>;
}
