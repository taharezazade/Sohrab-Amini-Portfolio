/** @format */

import servicesApi from "@/api/services.api";

const servicesService = {
  async getServices() {
    return servicesApi.getAll();
  },

  async getActiveServices() {
    return servicesApi.getActive();
  },

  async getStats() {
    return servicesApi.getStats();
  },

  async getServiceById(id) {
    return servicesApi.getById(id);
  },

  async createService(payload) {
    return servicesApi.create(payload);
  },

  async updateService(id, payload) {
    return servicesApi.update(id, payload);
  },

  async toggleServiceStatus(id) {
    return servicesApi.toggleStatus(id);
  },

  async deleteService(id) {
    return servicesApi.delete(id);
  },

  async reorderServices(items) {
    return servicesApi.reorder(items);
  },
};

export default servicesService;
