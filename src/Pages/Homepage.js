import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"

import IssueList from "../components/IssueList";
import OrgAndRepoForm from "../components/OrgAndRepoForm";


const Homepage = (props) => {
  const [issues, setIssues] = useState([]);
  // eslint-disable-next-line
  const [org, setOrg] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [page, setPage] = useState(1);

  const fetchIssues = async (org, repo, page) => {
    fetch(
      `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=${page}`
    )
      .then(r => r.json())
      .then(r => setIssues(r))

  };

  useEffect(
    () => {
      fetchIssues(org, repo, page);
    },
    [org, repo, page]
  );

  const handlePageNavClick = () => {

    setPage(page => page + 1)

    // fetchIssues(org, repo, page)
  }
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
      <Button onClick={handlePageNavClick}>
        See next Page
      </Button>
      <IssueList
        issueList={issues}
      />
    </>
  )
}
export default Homepage
