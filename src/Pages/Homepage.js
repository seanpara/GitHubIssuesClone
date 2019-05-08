import React, { useState, useEffect } from 'react'

import IssueList from "../components/IssueList";
import OrgAndRepoForm from "../components/OrgAndRepoForm";


const Homepage = (props) => {
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

  return(
    <>
      <OrgAndRepoForm
        org={org}
        repo={repo}
        fetchIssues={fetchIssues}
      />
      <IssueList
        issueList={issues}
      />
    </>
  )
}
export default Homepage
