import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UseAuthContext } from "../../authcontext";
import PropTypes from "prop-types";

const ProtectedRoute = (props) => {
  const { isLoggedin } = UseAuthContext();
  return isLoggedin ? (
    <Route exact={props.exact} path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
