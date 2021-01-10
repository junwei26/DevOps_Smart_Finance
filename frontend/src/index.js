import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import NavBar from "./components/navBar";
import Settings from "./pages/settings";
import Wallets from "./pages/addwallets";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/addwallets" component={Wallets}>
          <Wallets />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
