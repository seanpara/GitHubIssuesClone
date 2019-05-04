import React, { useState, useEffect } from 'react'
import IssueList from "./IssueList"

const App = (props) => {
  const [issues, setIssues] = useState([])
  // eslint-disable-next-line
  const [repo, setRepo] = useState("create-react-app")

  useEffect(
    () => {
      (async repo => {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues?per_page=25&page=1").then(r => r.json())
        console.log(response);
        setIssues(response);
      })(repo);
    },
    [repo]
  );
  if (issues.length === 0) {
    return null
  }
  return(
      <IssueList issueList={issues}/>
    )
}
export default App

//https://github.com//issues
