import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UseAuthContext } from "../../authcontext";
import PropTypes from "prop-types";

const ProtectedRoute = (props) => {
  const { isLoggedIn } = UseAuthContext();
  return isLoggedIn ? (
    <Route exact={props.exact} path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
ProtectedRoute.defaultProps = {
  exact: true,
};
ProtectedRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
