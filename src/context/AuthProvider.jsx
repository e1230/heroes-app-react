import React, { useReducer } from "react";
import { typesAuth } from "../types/types.auth";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: typesAuth.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
