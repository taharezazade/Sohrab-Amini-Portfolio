/** @format */

import api from "@/api/axios";

import { AUTH_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Authentication API
========================================================= */

const authApi = {
  /* =======================================================
     LOGIN
  ======================================================= */

  login(payload) {
    return api.post(AUTH_ENDPOINTS.LOGIN, payload);
  },

  /* =======================================================
     LOGOUT
  ======================================================= */

  logout() {
    return api.post(AUTH_ENDPOINTS.LOGOUT);
  },

  /* =======================================================
     CURRENT ADMIN
  ======================================================= */

  me() {
    return api.get(AUTH_ENDPOINTS.ME);
  },

  /* =======================================================
     PROFILE
  ======================================================= */

  getProfile() {
    return api.get(AUTH_ENDPOINTS.PROFILE);
  },

  /* =======================================================
     UPDATE PROFILE
  ======================================================= */

  updateProfile(payload) {
    return api.put(AUTH_ENDPOINTS.PROFILE, payload);
  },

  /* =======================================================
     CHANGE PASSWORD
  ======================================================= */

  changePassword(payload) {
    return api.patch(AUTH_ENDPOINTS.CHANGE_PASSWORD, payload);
  },
};

export default authApi;
