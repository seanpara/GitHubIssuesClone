import React, { useState } from "react";

const OrgAndRepoForm = ({org, repo}) => {
  const [formOrg, setFormOrg] = useState("");
  const [formRepo, setFormRepo] = useState("");
  const handleChange = event => {};
  const handleSubmit = event => {};
  return (
    <form>
      <label style={{ marginRight: "5%" }}>
        Organization Name
        <input
          placeholder={org}
          value={formOrg}
          onChange={e => setFormOrg(e.value)}
        />
      </label>
      <label>
        Repo Name
        <input
          placeholder={repo}
          value={formRepo}
          onChange={e => setFormRepo(e.value)}
        />
      </label>
      <input type="submit" name="submit" value="submit" />
    </form>
  );
};
export default OrgAndRepoForm;
