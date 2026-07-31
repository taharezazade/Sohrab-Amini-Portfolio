/** @format */

import api from "./axios.js";

const authApi = {
  /* =======================================================
      Login
  ======================================================= */

  login(data) {
    return api.post("/auth/login", data);
  },

  /* =======================================================
      Register
  ======================================================= */

  register(data) {
    return api.post("/auth/register", data);
  },

  /* =======================================================
      Logout
  ======================================================= */

  logout() {
    return api.post("/auth/logout");
  },

  /* =======================================================
      Get Current Admin
  ======================================================= */

  getProfile() {
    return api.get("/auth/me");
  },

  /* =======================================================
      Update Profile
  ======================================================= */

  updateProfile(data) {
    return api.put("/auth/profile", data);
  },

  /* =======================================================
      Change Password
  ======================================================= */

  changePassword(data) {
    return api.patch("/auth/change-password", data);
  },

  /* =======================================================
      Refresh Access Token
  ======================================================= */

  refreshToken() {
    return api.post("/auth/refresh-token");
  },
};

export default authApi;
