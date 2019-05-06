import React, { useState } from "react";

const OrgAndRepoForm = ({org, repo, fetchIssues }) => {
  const [formOrg, setFormOrg] = useState("");
  const [formRepo, setFormRepo] = useState("");
  const handleSubmit = event => {
    event.preventDefault()
    fetchIssues(formOrg, formRepo)
    // setOrg(formOrg)
    // setRepo(setRepo)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ marginRight: "5%" }}>
        Organization Name
        <input
          placeholder={org}
          value={formOrg}
          onChange={e => setFormOrg(e.target.value)}
        />
      </label>
      <label>
        Repo Name
        <input
          placeholder={repo}
          value={formRepo}
          onChange={e => setFormRepo(e.target.value)}
        />
      </label>
      <input type="submit" name="submit" value="submit" />
    </form>
  );
};
export default OrgAndRepoForm;
