/** @format */

import api from "@/api/axios";
import { HERO_ENDPOINTS } from "@/api/endpoints";

const heroService = {
  /* =========================================================
     GET HERO
  ========================================================= */

  async getHero() {
    return await api.get(HERO_ENDPOINTS.GET);
  },

  /* =========================================================
     CREATE HERO
  ========================================================= */

  async createHero(payload) {
    return await api.post(HERO_ENDPOINTS.CREATE, payload);
  },

  /* =========================================================
     UPDATE HERO
  ========================================================= */

  async updateHero(payload) {
    return await api.put(HERO_ENDPOINTS.UPDATE, payload);
  },

  /* =========================================================
     DELETE HERO
  ========================================================= */

  async deleteHero() {
    return await api.delete(HERO_ENDPOINTS.DELETE);
  },
};

export default heroService;
