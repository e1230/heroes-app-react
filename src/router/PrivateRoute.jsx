import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  console.log("re-render");
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
};
