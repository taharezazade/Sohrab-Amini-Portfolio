/** @format */

import api from "@/api/axios";
import { PORTFOLIO_ENDPOINTS } from "@/api/endpoints";

/*
 * Public frontend service.
 *
 * The public site is READ-ONLY.
 * Create/update/delete operations stay in Admin.
 */

const portfolioService = {
  async getPublishedPortfolio() {
    return await api.get(PORTFOLIO_ENDPOINTS.GET_PUBLISHED);
  },

  async getPortfolioById(id) {
    return await api.get(PORTFOLIO_ENDPOINTS.GET_BY_ID(id));
  },

  async getPortfolioBySlug(slug) {
    return await api.get(PORTFOLIO_ENDPOINTS.GET_BY_SLUG(slug));
  },

  async getFeaturedPortfolio() {
    return await api.get(PORTFOLIO_ENDPOINTS.GET_FEATURED);
  },
};

export default portfolioService;
