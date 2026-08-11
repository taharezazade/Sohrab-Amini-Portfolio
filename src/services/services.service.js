/** @format */

import api from "@/api/axios";
import { SERVICES_ENDPOINTS } from "@/api/endpoints";

const servicesService = {
  async getServices() {
    return await api.get(SERVICES_ENDPOINTS.GET);
  },

  async getServiceById(id) {
    return await api.get(SERVICES_ENDPOINTS.GET_BY_ID(id));
  },

  async exists() {
    return await api.get(SERVICES_ENDPOINTS.EXISTS);
  },

  async count() {
    return await api.get(SERVICES_ENDPOINTS.COUNT);
  },

  async createService(payload) {
    return await api.post(SERVICES_ENDPOINTS.CREATE, payload);
  },

  async updateService(id, payload) {
    return await api.put(SERVICES_ENDPOINTS.UPDATE(id), payload);
  },

  async deleteService(id) {
    return await api.delete(SERVICES_ENDPOINTS.DELETE(id));
  },

  async updateImage(id, payload) {
    return await api.put(SERVICES_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  async clearImage(id) {
    return await api.delete(SERVICES_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default servicesService;
