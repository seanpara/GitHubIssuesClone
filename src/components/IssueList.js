import React from 'react'
import Issue from "./Issue"

const IssueList = (props) => {
  const renderIssues = () => {
    props.issueList.map(issue => {
      console.log(issue);
      return <Issue issue={issue}/>
    })
  }
  return(
    <div>{renderIssues()}</div>
    )
}
export default IssueList
