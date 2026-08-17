/** @format */

import api from "@/api/axios";

const BASE = "/portfolio";

const portfolioService = {
  getAll(params = {}) {
    return api.get(BASE, { params });
  },

  getPublished() {
    return api.get(`${BASE}/published`);
  },

  getFeatured() {
    return api.get(`${BASE}/featured`);
  },

  getById(id) {
    return api.get(`${BASE}/${id}`);
  },

  getBySlug(slug) {
    return api.get(`${BASE}/slug/${encodeURIComponent(slug)}`);
  },

  create(formData) {
    return api.post(BASE, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },

  update(id, formData) {
    return api.put(`${BASE}/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },

  remove(id) {
    return api.delete(`${BASE}/${id}`);
  },

  updateStatus(id, status) {
    return api.patch(`${BASE}/${id}/status`, { status });
  },

  updateOrder(id, order) {
    return api.patch(`${BASE}/${id}/order`, { order });
  },
};

export default portfolioService;
