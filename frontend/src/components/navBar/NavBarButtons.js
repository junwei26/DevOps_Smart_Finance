import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { UseAuthContext } from "../../authcontext";

const NavBarButtons = () => {
  const { isLoggedIn, setLogin } = UseAuthContext();

  return (
    <Nav className="ml-auto">
      {isLoggedIn ? (
        <>
          <Nav.Link as={Link} to="/accounts">
            Accounts
          </Nav.Link>
          <Nav.Link as={Link} to="/analytics">
            Analytics
          </Nav.Link>
          <Nav.Link as={Link} to="/settings">
            Settings
          </Nav.Link>
          <Nav.Link as={Link} to="/" onClick={() => setLogin(false)}>
            Sign Out
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
        </>
      )}
    </Nav>
  );
};

export default NavBarButtons;
