/** @format */

import { useContext } from "react";

import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "هوک احراز هویت باید فقط داخل کامپوننت AuthProvider استفاده شود.",
    );
  }

  return context;
};

export default useAuth;
