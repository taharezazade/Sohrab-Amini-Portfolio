/** @format */

import { useContext } from "react";

import AuthContext from "@/context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth باید درون AuthProvider استفاده شود.");
  }

  return context;
};

export default useAuth;
