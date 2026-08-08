/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const settingsService = {
  /**
   * Get Settings
   */
  get() {
    return api.get(API.GET);
  },

  /**
   * Update Settings
   */
  update(payload) {
    return api.put(API.UPDATE, payload);
  },
};

export default settingsService;
