import React, { useState, useEffect } from "react";
import IssueList from "./IssueList";
import OrgAndRepoForm from "./OrgAndRepoForm";

const App = props => {
  const [issues, setIssues] = useState([]);
  // eslint-disable-next-line
  const [org, setOrg] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");

  const fetchIssues = async (org, repo) => {
    fetch(
      `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=1`
    )
      .then(r => r.json())
      .then(r => setIssues(r))
      .catch(error => {
        console.log(error);
        return
      });
  };

  useEffect(
    () => {
      fetchIssues(org, repo);
    },
    []
    //[org, repo]
  );
  if (issues.length === 0) {
    return null;
  }
  return (
    <>
      <OrgAndRepoForm org={org} repo={repo} fetchIssues={fetchIssues} />
      <IssueList issueList={issues} />;
    </>
  );
};
export default App;

//https://github.com//issues
