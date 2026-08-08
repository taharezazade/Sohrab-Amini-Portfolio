/** @format */

import api from "@/api/axios";

import { AUTH_ENDPOINTS } from "@/api/endpoints";

const authService = {
  login(payload) {
    return api.post(AUTH_ENDPOINTS.LOGIN, payload);
  },

  logout() {
    return api.post(AUTH_ENDPOINTS.LOGOUT);
  },

  getProfile() {
    return api.get(AUTH_ENDPOINTS.PROFILE);
  },
};

export default authService;
