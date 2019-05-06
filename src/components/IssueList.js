import React from 'react'
import Issue from "./Issue"

const IssueList = (props) => {

  const renderIssues = () => {
    //debugger
    if(props.issueList.length === 0) {
      return null
    }
    else {
      return props.issueList.map(issue => {
        return <Issue key={issue.id} issue={issue}/>
      })
    }

  }
  return(
    <div>{renderIssues()}</div>
    )
}
export default IssueList
