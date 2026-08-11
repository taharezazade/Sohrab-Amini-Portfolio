/** @format */

import api from "@/api/axios";
import { SETTINGS_ENDPOINTS } from "@/api/endpoints";

const settingsService = {
  async getSettings() {
    return await api.get(SETTINGS_ENDPOINTS.GET);
  },

  async createSettings(payload) {
    return await api.post(SETTINGS_ENDPOINTS.CREATE, payload);
  },

  async updateSettings(payload) {
    return await api.put(SETTINGS_ENDPOINTS.UPDATE, payload);
  },

  async deleteSettings() {
    return await api.delete(SETTINGS_ENDPOINTS.DELETE);
  },
};

export default settingsService;
