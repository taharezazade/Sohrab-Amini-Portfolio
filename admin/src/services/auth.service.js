/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

/**
 * =========================================================
 * Authentication Service
 * =========================================================
 */

const authService = {
  /**
   * POST /api/auth/login
   */
  async login(payload) {
    return api.post(API.AUTH.LOGIN, payload);
  },

  /**
   * POST /api/auth/logout
   */
  async logout() {
    return api.post(API.AUTH.LOGOUT);
  },

  /**
   * GET /api/auth/me
   */
  async me() {
    return api.get(API.AUTH.ME);
  },

  /**
   * GET /api/auth/profile
   */
  async getProfile() {
    return api.get(API.AUTH.PROFILE);
  },

  /**
   * PUT /api/auth/profile
   */
  async updateProfile(payload) {
    return api.put(API.AUTH.PROFILE, payload);
  },

  /**
   * PATCH /api/auth/change-password
   */
  async changePassword(payload) {
    return api.patch(API.AUTH.CHANGE_PASSWORD, payload);
  },
};

export default authService;
