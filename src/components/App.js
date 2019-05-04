import React, { useState, useEffect } from "react";
import IssueList from "./IssueList";
import OrgAndRepoForm from "./OrgAndRepoForm"

const App = props => {
  const [issues, setIssues] = useState([]);
  // eslint-disable-next-line
  const [repo, setRepo] = useState("create-react-app");
  const [org, setOrg] = useState("facebook")
  useEffect(
    () => {
      (async () => {
        const response = await fetch(
          `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=1`
        ).then(r => r.json());
        console.log(response);
        setIssues(response);
      })();
    },
    [repo]
  );
  if (issues.length === 0) {
    return null;
  }
  return (
    <>
      <OrgAndRepoForm org={org} repo={repo}/>
      <IssueList issueList={issues} />;
    </>
  )
};
export default App;

//https://github.com//issues
