/** @format */

import api from "@/api/axios";

import { SETTINGS_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Settings API
========================================================= */

const settingsApi = {
  get() {
    return api.get(SETTINGS_ENDPOINTS.GET);
  },

  create(payload) {
    return api.post(SETTINGS_ENDPOINTS.CREATE, payload);
  },

  update(payload) {
    return api.put(SETTINGS_ENDPOINTS.UPDATE, payload);
  },

  remove() {
    return api.delete(SETTINGS_ENDPOINTS.DELETE);
  },
};

export default settingsApi;
