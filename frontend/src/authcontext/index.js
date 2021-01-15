import React, { useContext } from "react";

export const AuthContext = React.createContext({ isLoggedIn: false, setLogin: () => {} });
export const UseAuthContext = () => {
  return useContext(AuthContext);
};
