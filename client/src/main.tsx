import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./router/App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
