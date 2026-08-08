/** @format */

import api from "@/api/axios";
import { ABOUT_ENDPOINTS } from "@/api/endpoints";

const aboutService = {
  /* =========================================
      Get About
  ========================================= */

  async getAbout() {
    console.log(import.meta.env.VITE_API_URL);

    const response = await api.get(ABOUT_ENDPOINTS.GET);

    return response;
  },

  /* =========================================
      Create About
  ========================================= */

  async createAbout(payload) {
    const response = await api.post(ABOUT_ENDPOINTS.CREATE, payload);

    return response;
  },

  /* =========================================
      Update About
  ========================================= */

  async updateAbout(payload) {
    const response = await api.put(ABOUT_ENDPOINTS.UPDATE, payload);

    return response;
  },

  /* =========================================
      Upsert About
  ========================================= */

  async upsertAbout(payload) {
    const response = await api.put(ABOUT_ENDPOINTS.UPSERT, payload);

    return response;
  },

  /* =========================================
      Delete About
  ========================================= */

  async deleteAbout() {
    const response = await api.delete(ABOUT_ENDPOINTS.DELETE);

    return response;
  },
};

export default aboutService;
