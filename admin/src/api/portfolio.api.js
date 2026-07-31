/** @format */

import api from "./axios.js";

const portfolioApi = {
  /* =======================================================
      Get All Portfolios
  ======================================================= */

  getAllPortfolios(params = {}) {
    return api.get("/portfolio", {
      params,
    });
  },

  /* =======================================================
      Get Portfolio By ID
  ======================================================= */

  getPortfolioById(id) {
    return api.get(`/portfolio/${id}`);
  },

  /* =======================================================
      Get Portfolio By Slug
  ======================================================= */

  getPortfolioBySlug(slug) {
    return api.get(`/portfolio/slug/${slug}`);
  },

  /* =======================================================
      Create Portfolio
  ======================================================= */

  createPortfolio(data) {
    return api.post("/portfolio", data);
  },

  /* =======================================================
      Update Portfolio
  ======================================================= */

  updatePortfolio(id, data) {
    return api.put(`/portfolio/${id}`, data);
  },

  /* =======================================================
      Delete Portfolio
  ======================================================= */

  deletePortfolio(id) {
    return api.delete(`/portfolio/${id}`);
  },
};

export default portfolioApi;
