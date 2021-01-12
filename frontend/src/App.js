import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import NavBar from "./components/navBar";
import Login from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import { AuthContext } from "./authcontext";
import ProtectedRoute from "./components/protectedroute";
import LandingPage from "./pages/landingpage";

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLogin }}>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/settings" component={Settings} />
        <ProtectedRoute path="/accounts" component={Accounts} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;
