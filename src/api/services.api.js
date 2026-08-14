/** @format */

import api from "@/api/axios";
import { SERVICES_ENDPOINTS } from "@/api/endpoints";

const servicesApi = {
  /* =========================================================
     PUBLIC
  ========================================================= */

  getAll() {
    return api.get(SERVICES_ENDPOINTS.GET_ALL);
  },

  getActive() {
    return api.get(SERVICES_ENDPOINTS.GET_ACTIVE);
  },

  getById(id) {
    return api.get(SERVICES_ENDPOINTS.GET_BY_ID(id));
  },

  /* =========================================================
     ADMIN
  ========================================================= */

  getStats() {
    return api.get(SERVICES_ENDPOINTS.STATS);
  },

  create(payload) {
    return api.post(SERVICES_ENDPOINTS.CREATE, payload);
  },

  update(id, payload) {
    return api.put(SERVICES_ENDPOINTS.UPDATE(id), payload);
  },

  toggleStatus(id) {
    return api.patch(SERVICES_ENDPOINTS.TOGGLE_STATUS(id));
  },

  delete(id) {
    return api.delete(SERVICES_ENDPOINTS.DELETE(id));
  },

  reorder(items) {
    return api.patch(SERVICES_ENDPOINTS.REORDER, {
      items,
    });
  },
};

export default servicesApi;
