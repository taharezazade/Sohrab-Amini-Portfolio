/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const servicesService = {
  /**
   * Get All Services
   */
  getAll() {
    return api.get(API.GET_ALL);
  },

  /**
   * Get Service By ID
   */
  getById(id) {
    return api.get(API.GET_BY_ID(id));
  },

  /**
   * Create Service
   */
  create(payload) {
    return api.post(API.CREATE, payload);
  },

  /**
   * Update Service
   */
  update(id, payload) {
    return api.put(API.UPDATE(id), payload);
  },

  /**
   * Delete Service
   */
  remove(id) {
    return api.delete(API.DELETE(id));
  },

  /**
   * Reorder Services
   */
  reorder(payload) {
    return api.patch(API.REORDER, payload);
  },
};

export default servicesService;
