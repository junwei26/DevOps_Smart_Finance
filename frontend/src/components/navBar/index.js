import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="title">
        Smart Finance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavBarButtons />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
