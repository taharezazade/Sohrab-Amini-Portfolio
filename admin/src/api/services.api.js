/** @format */

import api from "@/api/axios";

import { SERVICES_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Services API
========================================================= */

const servicesApi = {
  getAll() {
    return api.get(SERVICES_ENDPOINTS.GET_ALL);
  },

  getById(id) {
    return api.get(SERVICES_ENDPOINTS.GET_BY_ID(id));
  },

  exists() {
    return api.get(SERVICES_ENDPOINTS.EXISTS);
  },

  count() {
    return api.get(SERVICES_ENDPOINTS.COUNT);
  },

  create(payload) {
    return api.post(SERVICES_ENDPOINTS.CREATE, payload);
  },

  update(id, payload) {
    return api.put(SERVICES_ENDPOINTS.UPDATE(id), payload);
  },

  remove(id) {
    return api.delete(SERVICES_ENDPOINTS.DELETE(id));
  },

  updateImage(id, payload) {
    return api.put(SERVICES_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  clearImage(id) {
    return api.delete(SERVICES_ENDPOINTS.CLEAR_IMAGE(id));
  },

  reorder(payload) {
    return api.patch(SERVICES_ENDPOINTS.REORDER, payload);
  },
};

export default servicesApi;
