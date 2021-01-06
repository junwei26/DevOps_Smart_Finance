import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import NavBar from "./components/navBar";
import Settings from "./pages/settings";
import Wallets from "./pages/addwallets";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/addwallets">
          <Wallets />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
