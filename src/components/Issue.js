import React from 'react'

const Issue = ({issue}) => {

  return (
    <div
      style={{ border: "2px solid green", margin: "5px" }}
    >
      <h3>{issue.title}</h3>
      
    </div>
    )
}
export default Issue
