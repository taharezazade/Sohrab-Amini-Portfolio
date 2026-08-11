/** @format */

import api from "@/api/axios";
import { ABOUT_ENDPOINTS } from "@/api/endpoints";

const aboutService = {
  async getAbout() {
    return await api.get(ABOUT_ENDPOINTS.GET);
  },

  async getAboutById(id) {
    return await api.get(ABOUT_ENDPOINTS.GET_BY_ID(id));
  },

  async exists() {
    return await api.get(ABOUT_ENDPOINTS.EXISTS);
  },

  async count() {
    return await api.get(ABOUT_ENDPOINTS.COUNT);
  },

  async createAbout(payload) {
    return await api.post(ABOUT_ENDPOINTS.CREATE, payload);
  },

  async updateAbout(payload) {
    return await api.put(ABOUT_ENDPOINTS.UPDATE, payload);
  },

  async updateAboutById(id, payload) {
    return await api.put(ABOUT_ENDPOINTS.UPDATE_BY_ID(id), payload);
  },

  async upsertAbout(payload) {
    return await api.post(ABOUT_ENDPOINTS.UPSERT, payload);
  },

  async deleteAbout() {
    return await api.delete(ABOUT_ENDPOINTS.DELETE);
  },

  async deleteAboutById(id) {
    return await api.delete(ABOUT_ENDPOINTS.DELETE_BY_ID(id));
  },

  async updateImage(id, payload) {
    return await api.put(ABOUT_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  async clearImage(id) {
    return await api.delete(ABOUT_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default aboutService;
