/** @format */

import api from "@/api/axios";

import { ABOUT_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   About API
========================================================= */

const aboutApi = {
  get() {
    return api.get(ABOUT_ENDPOINTS.GET);
  },

  getById(id) {
    return api.get(ABOUT_ENDPOINTS.GET_BY_ID(id));
  },

  exists() {
    return api.get(ABOUT_ENDPOINTS.EXISTS);
  },

  count() {
    return api.get(ABOUT_ENDPOINTS.COUNT);
  },

  create(payload) {
    return api.post(ABOUT_ENDPOINTS.CREATE, payload);
  },

  update(payload) {
    return api.put(ABOUT_ENDPOINTS.UPDATE, payload);
  },

  updateById(id, payload) {
    return api.put(ABOUT_ENDPOINTS.UPDATE_BY_ID(id), payload);
  },

  upsert(payload) {
    return api.post(ABOUT_ENDPOINTS.UPSERT, payload);
  },

  remove() {
    return api.delete(ABOUT_ENDPOINTS.DELETE);
  },

  removeById(id) {
    return api.delete(ABOUT_ENDPOINTS.DELETE_BY_ID(id));
  },

  updateImage(id, payload) {
    return api.put(ABOUT_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  clearImage(id) {
    return api.delete(ABOUT_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default aboutApi;
