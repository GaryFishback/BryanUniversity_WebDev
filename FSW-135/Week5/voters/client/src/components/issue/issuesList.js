import React from "react";
import Issue from "./issue.js";

export default function IssuesList(props) {
    const {issues} = props
    return <section id="issueList">
        {issues.map(issue => <Issue {...issue} key={issue._id}/>)}
        
        </section>;
}
