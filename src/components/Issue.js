import React from 'react'
import { Link } from "react-router-dom";

const Issue = ({issue}) => {

  return (
    <div
      style={{ border: "2px solid green", margin: "5px" }}
    >
      <Link
        onClick={() => console.log("link clicked! on", issue.id)}
        to={{ pathname: `/issues/${issue.id}`, state: { issue } }}
      >
        <h3>{issue.title}</h3>
      </Link>

    </div>
    )
}
export default Issue
