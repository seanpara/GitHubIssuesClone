import React from 'react'
import { MDBRow, MDBCol } from "mdbreact";

import Issue from "./Issue"

const IssueList = ({issueList}) => {

  const renderIssues = () => {
    //debugger
    if(issueList.length === 0) {
      return null
    }
    else {
      console.log(issueList.length);
      return issueList.map(issue => {
        return <Issue key={issue.id} issue={issue}/>
      })
    }

  }
  return(
    <MDBRow className="d-flex flex-column justify-content-center">
      {renderIssues()}<
    /MDBRow>
    )
}
export default IssueList
