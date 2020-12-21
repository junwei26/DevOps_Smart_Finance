import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import NavBar from "./components/navBar";
import Login from "./pages/login";
import { AuthContext } from "./authcontext";
import ProtectedRoute from "./protectedroute";

const RouteControl = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" component={Accounts} />
      <ProtectedRoute path="/accounts" component={Accounts} />
    </Switch>
  );
};
const App = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLogin }}>
      <NavBar />
      <RouteControl />
    </AuthContext.Provider>
  );
};

export default App;
