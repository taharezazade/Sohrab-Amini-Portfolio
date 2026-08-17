/** @format */

import api from "@/api/axios";

const BASE = "/portfolio-images";

const portfolioImageService = {
  getAll() {
    return api.get(BASE);
  },

  getByPortfolio(portfolioId) {
    return api.get(`${BASE}/portfolio/${portfolioId}`);
  },

  getById(imageId) {
    return api.get(`${BASE}/${imageId}`);
  },

  create(portfolioId, formData) {
    return api.post(`${BASE}/portfolio/${portfolioId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },

  uploadMany(portfolioId, formData) {
    return api.post(`${BASE}/portfolio/${portfolioId}/upload`, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },

  update(imageId, payload) {
    return api.put(`${BASE}/${imageId}`, payload);
  },

  updateOrder(imageId, order) {
    return api.patch(`${BASE}/${imageId}/order`, { order });
  },

  remove(imageId) {
    return api.delete(`${BASE}/${imageId}`);
  },

  removeByPortfolio(portfolioId) {
    return api.delete(`${BASE}/portfolio/${portfolioId}`);
  },
};

export default portfolioImageService;
