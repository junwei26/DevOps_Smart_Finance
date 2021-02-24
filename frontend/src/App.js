import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import Login from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import LandingPage from "./pages/landingpage";
import AddWallets from "./pages/addwallets";
import Analytics from "./pages/analytics";
import { AuthContext } from "./authcontext";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/protectedroute";

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
        <ProtectedRoute path="/addwallets" component={AddWallets} />
        <ProtectedRoute path="/analytics" component={Analytics} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;
