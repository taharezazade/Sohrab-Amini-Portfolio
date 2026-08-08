/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const aboutService = {
  /**
   * Get About Data
   */
  get() {
    return api.get(API.GET);
  },

  /**
   * Update About Data
   */
  update(payload) {
    return api.put(API.UPDATE, payload);
  },
};

export default aboutService;
