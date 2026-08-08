/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const contactService = {
  /**
   * Get Contact Information
   */
  get() {
    return api.get(API.GET);
  },

  /**
   * Update Contact Information
   */
  update(payload) {
    return api.put(API.UPDATE, payload);
  },
};

export default contactService;
