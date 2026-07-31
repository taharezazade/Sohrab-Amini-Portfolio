/** @format */

import api from "./axios.js";

const servicesApi = {
  /* =======================================================
      Get All Services
  ======================================================= */

  getAllServices() {
    return api.get("/services");
  },

  /* =======================================================
      Get Active Services
  ======================================================= */

  getActiveServices() {
    return api.get("/services/active");
  },

  /* =======================================================
      Get Service By ID
  ======================================================= */

  getServiceById(id) {
    return api.get(`/services/${id}`);
  },

  /* =======================================================
      Create Service
  ======================================================= */

  createService(data) {
    return api.post("/services", data);
  },

  /* =======================================================
      Update Service
  ======================================================= */

  updateService(id, data) {
    return api.put(`/services/${id}`, data);
  },

  /* =======================================================
      Delete Service
  ======================================================= */

  deleteService(id) {
    return api.delete(`/services/${id}`);
  },

  /* =======================================================
      Toggle Service Status
  ======================================================= */

  toggleServiceStatus(id) {
    return api.patch(`/services/${id}/toggle`);
  },

  /* =======================================================
      Reorder Services
  ======================================================= */

  reorderServices(data) {
    return api.patch("/services/reorder", data);
  },
};

export default servicesApi;
