import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBarButtons = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <Nav className="ml-auto">
      {currentUser && currentUser.isLoggedIn ? (
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
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => {
              localStorage.setItem("currentUser", JSON.stringify({ token: "" }));
              window.location.reload(false);
            }}
          >
            Sign Out
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </>
      )}
    </Nav>
  );
};

export default NavBarButtons;
