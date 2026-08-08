/** @format */

import { useCallback, useEffect, useMemo, useState } from "react";

import AuthContext from "./auth-context";
import authService from "@/services/auth.service";

export default function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await authService.getProfile();

      setAdmin(response.data.data);
    } catch {
      localStorage.removeItem("accessToken");
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await authService.getProfile();

        setAdmin(response.data.data);
      } catch {
        localStorage.removeItem("accessToken");
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (payload) => {
    const response = await authService.login(payload);

    const { accessToken, admin } = response.data.data;

    localStorage.setItem("accessToken", accessToken);

    setAdmin(admin);

    return response;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      localStorage.removeItem("accessToken");
      setAdmin(null);
    }
  };

  const value = useMemo(
    () => ({
      admin,

      loading,

      isAuthenticated: Boolean(admin),

      login,

      logout,

      checkAuth,
    }),
    [admin, loading, checkAuth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
