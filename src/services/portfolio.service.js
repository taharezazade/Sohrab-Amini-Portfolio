/** @format */

import api from "@/api/axios";
import { PORTFOLIO_ENDPOINTS } from "@/api/endpoints";

const portfolioService = {
  async getPortfolio() {
    return await api.get(PORTFOLIO_ENDPOINTS.GET);
  },

  async getPortfolioById(id) {
    return await api.get(PORTFOLIO_ENDPOINTS.GET_BY_ID(id));
  },

  async exists() {
    return await api.get(PORTFOLIO_ENDPOINTS.EXISTS);
  },

  async count() {
    return await api.get(PORTFOLIO_ENDPOINTS.COUNT);
  },

  async createPortfolio(payload) {
    return await api.post(PORTFOLIO_ENDPOINTS.CREATE, payload);
  },

  async updatePortfolio(id, payload) {
    return await api.put(PORTFOLIO_ENDPOINTS.UPDATE(id), payload);
  },

  async deletePortfolio(id) {
    return await api.delete(PORTFOLIO_ENDPOINTS.DELETE(id));
  },

  async updateImage(id, payload) {
    return await api.put(PORTFOLIO_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  async clearImage(id) {
    return await api.delete(PORTFOLIO_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default portfolioService;
