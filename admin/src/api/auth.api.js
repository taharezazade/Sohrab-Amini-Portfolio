/** @format */

import api from "./axios";
import { AUTH_ENDPOINTS, PROFILE_ENDPOINTS } from "./endpoints";

const authApi = {
  login: (data) => {
    return api.post(AUTH_ENDPOINTS.LOGIN, data);
  },

  logout: () => {
    return api.post(AUTH_ENDPOINTS.LOGOUT);
  },

  refresh: () => {
    return api.post(AUTH_ENDPOINTS.REFRESH);
  },

  me: () => {
    return api.get(AUTH_ENDPOINTS.ME);
  },

  getProfile: () => {
    return api.get(PROFILE_ENDPOINTS.GET);
  },

  updateProfile: (data) => {
    return api.patch(PROFILE_ENDPOINTS.UPDATE, data);
  },

  changePassword: (data) => {
    return api.patch(PROFILE_ENDPOINTS.CHANGE_PASSWORD, data);
  },

  deleteImage: () => {
    return api.delete(PROFILE_ENDPOINTS.DELETE_IMAGE);
  },
};

export default authApi;
