import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import IssueList from "../components/IssueList";
import OrgAndRepoForm from "../components/OrgAndRepoForm";

const Homepage = props => {
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
      .catch( e => console.log(e))
      .then(r => setIssues(r));
  }

  useEffect(
    () => {
      fetchIssues(org, repo, page);
    },
    [org, repo, page]
  );

  const handlePageForwardClick = () => {
    setPage(page => page + 1);
  };

  const handlePageBackClick = () => {
    if (page >= 0) setPage(page => page - 1);
  };

  if (issues.length === 0) {
    return null;
  }

  const buttonStyle = { margin: "1% 1%" }
  return (
    <MDBContainer className="d-flex flex-column align-items-center">
      <MDBRow>
        <OrgAndRepoForm org={org} repo={repo} fetchIssues={fetchIssues} />
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <Button style={buttonStyle} onClick={handlePageBackClick}>
            See last Page
          </Button>
          <Button style={buttonStyle} onClick={handlePageForwardClick}>
            See next Page
          </Button>
        </MDBCol>
      </MDBRow>
      <IssueList issueList={issues} />
    </MDBContainer>
  );
};
export default Homepage;
