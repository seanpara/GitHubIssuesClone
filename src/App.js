import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Homepage from "./Pages/Homepage"
import IssueShowPage from "./Pages/IssueShowPage"

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/issues/:id" component={IssueShowPage}/>
    </Router>
  );
};
export default App;

//https://github.com//issues
