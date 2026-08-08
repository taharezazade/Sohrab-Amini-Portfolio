/** @format */

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import authApi from "@/api/auth.api";
import { STORAGE_KEYS } from "@/constants/storage";
import authService from "@/services/auth.service";
import AuthContext from "./AuthContext";

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  const [loading, setLoading] = useState(
    () => !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* =======================================================
      Load Current Admin
  ======================================================= */

  const loadProfile = useCallback(async () => {
    try {
      const { data } = await authApi.getProfile();

      setAdmin(data.data);

      setIsAuthenticated(true);
    } catch {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

      setAdmin(null);

      setIsAuthenticated(false);
    }
  }, []);

  /* =======================================================
      Login
  ======================================================= */

  const login = useCallback(async (payload) => {
    const { data } = await authService.login(payload);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.data.accessToken);

    setAdmin(data.data.admin);

    setIsAuthenticated(true);

    toast.success("با موفقیت وارد شدید.");

    return data;
  }, []);

  /* =======================================================
      Logout
  ======================================================= */

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } finally {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);

      setAdmin(null);

      setIsAuthenticated(false);

      toast.success("با موفقیت خارج شدید.");
    }
  }, []);

  /* =======================================================
      Refresh Profile
  ======================================================= */

  const refreshProfile = useCallback(async () => {
    await loadProfile();
  }, [loadProfile]);

  /* =======================================================
      Update Profile
  ======================================================= */

  const updateProfile = useCallback(async (payload) => {
    const { data } = await authApi.updateProfile(payload);

    setAdmin(data.data);

    toast.success(data.message);

    return data;
  }, []);

  /* =======================================================
      Change Password
  ======================================================= */

  const changePassword = useCallback(async (payload) => {
    const { data } = await authApi.changePassword(payload);

    toast.success(data.message);

    return data;
  }, []);

  /* =======================================================
      Initial Load
  ======================================================= */

  useEffect(() => {
    const initialize = async () => {
      if (!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)) {
        setLoading(false);

        return;
      }

      await loadProfile();

      setLoading(false);
    };

    initialize();
  }, [loadProfile]);

  /* =======================================================
      Context Value
  ======================================================= */

  const value = useMemo(
    () => ({
      admin,
      loading,
      isAuthenticated,

      login,
      logout,

      refreshProfile,

      updateProfile,
      changePassword,
    }),

    [
      admin,
      loading,
      isAuthenticated,

      login,
      logout,

      refreshProfile,

      updateProfile,
      changePassword,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
