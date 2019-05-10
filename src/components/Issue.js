import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";

const Issue = ({ issue }) => {
  return (
    <MDBCol style={{ border: "2px solid green", margin: "5px" }} md="12">
      <Link
        onClick={() => console.log("link clicked! on", issue.id)}
        to={{ pathname: `/issues/${issue.id}`, state: { issue } }}
      >
        <h3>{issue.title}</h3>
      </Link>
    </MDBCol>
  );
};
export default Issue;
