import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
// import "./styles.scss";

const appRouting = (
  <Router>
    <Routes>
      <Route path="/" element={App} />
    </Routes>
  </Router>
);

export default appRouting;