import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CompanyOverview from "./components/CompanyOverview";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/company-overview/:companyID">
          <CompanyOverview/>
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
