import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { createBrowserHistory } from "history";
import { ga } from "react-ga";

const history = createBrowserHistory();
history.listen(location => {
  console.log("tracking", location.pathname);
  ga("send", "pageview", location.pathname);
});

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
