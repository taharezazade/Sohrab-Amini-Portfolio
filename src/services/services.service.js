/** @format */

import servicesApi from "@/api/services.api";

const servicesService = {
  /* =========================================================
     PUBLIC
  ========================================================= */

  async getServices() {
    return await servicesApi.getAll();
  },

  async getActiveServices() {
    return await servicesApi.getActive();
  },

  async getServiceById(id) {
    return await servicesApi.getById(id);
  },

  /* =========================================================
     ADMIN
  ========================================================= */

  async getStats() {
    return await servicesApi.getStats();
  },

  async createService(payload) {
    return await servicesApi.create(payload);
  },

  async updateService(id, payload) {
    return await servicesApi.update(id, payload);
  },

  async toggleServiceStatus(id) {
    return await servicesApi.toggleStatus(id);
  },

  async deleteService(id) {
    return await servicesApi.delete(id);
  },

  async reorderServices(items) {
    return await servicesApi.reorder(items);
  },
};

export default servicesService;
