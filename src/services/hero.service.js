/** @format */

import api from "@/api/axios";
import { HERO_ENDPOINTS } from "@/api/endpoints";

const heroService = {
  /* =========================================
      Get Hero
  ========================================= */

  async getHero() {
    const response = await api.get(HERO_ENDPOINTS.GET);

    return response;
  },

  /* =========================================
      Create Hero
  ========================================= */

  async createHero(payload) {
    const response = await api.post(HERO_ENDPOINTS.CREATE, payload);

    return response;
  },

  /* =========================================
      Update Hero
  ========================================= */

  async updateHero(payload) {
    const response = await api.put(HERO_ENDPOINTS.UPDATE, payload);

    return response;
  },

  /* =========================================
      Upsert Hero
  ========================================= */

  async upsertHero(payload) {
    const response = await api.put(HERO_ENDPOINTS.UPDATE, payload);

    return response;
  },

  /* =========================================
      Delete Hero
  ========================================= */

  async deleteHero() {
    const response = await api.delete(HERO_ENDPOINTS.DELETE);

    return response;
  },
};

export default heroService;
