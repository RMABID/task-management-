import { createContext } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const value = {};
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
