import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import AppHOOK from "./AppHOOK";


//   <React.StrictMode>
ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
{
  /* </React.StrictMode>, */
}
// ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
