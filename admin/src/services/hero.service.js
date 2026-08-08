/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const heroService = {
  /**
   * Get Hero Data
   */
  get() {
    return api.get(API.GET);
  },

  /**
   * Update Hero Data
   */
  update(payload) {
    return api.put(API.UPDATE, payload);
  },
};

export default heroService;
