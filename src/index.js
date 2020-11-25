

import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import MultipleItems from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(  )