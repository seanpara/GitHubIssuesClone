import React from 'react'
import Markdown from "react-markdown"
import { Link } from "react-router-dom";

const IssueShowPage = (props) => {
  const { issue } = props.location.state
  console.log(issue);
  return(
    <div>
      <Link to="/">Take me Home!</Link>
      <h3>{issue.title}</h3>
      <h4>{issue.open ? "Open" : "Closed"}</h4>
      <Markdown source={issue.body}/>
    </div>
    )
}
export default IssueShowPage
