import React, { useState, useEffect } from 'react'
import IssueList from "./IssueList"

const App = (props) => {
  const [issues, setIssues] = useState([])
  const [repo, setRepo] = useState("create-react-app")

  useEffect(
    () => {
      (async repo => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(r => r.json())
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

//https://github.com/facebook/create-react-app/issues
