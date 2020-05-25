import React from "react";
import Issue from "./issue.js";

export default function IssuesList(props) {
    const {issues, errMsg} = props
    return <section id="issueList">
        {issues.map(issue => <Issue {...issue} errMsg={errMsg} key={issue._id}/>)}
        
        </section>;
}
