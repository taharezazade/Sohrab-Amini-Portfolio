/** @format */

import api from "@/api/axios";
import { PORTFOLIO_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   PORTFOLIO API
========================================================= */

const portfolioApi = {
  /* =======================================================
     GET ALL
     GET /api/portfolio
  ======================================================= */

  getAll(params = {}) {
    return api.get(PORTFOLIO_ENDPOINTS.GET_ALL, {
      params,
    });
  },

  /* =======================================================
     GET PUBLISHED
     GET /api/portfolio/published
  ======================================================= */

  getPublished() {
    return api.get(PORTFOLIO_ENDPOINTS.GET_PUBLISHED);
  },

  /* =======================================================
     GET FEATURED
     GET /api/portfolio/featured
  ======================================================= */

  getFeatured() {
    return api.get(PORTFOLIO_ENDPOINTS.GET_FEATURED);
  },

  /* =======================================================
     GET BY ID
     GET /api/portfolio/:id
  ======================================================= */

  getById(id) {
    return api.get(PORTFOLIO_ENDPOINTS.GET_BY_ID(id));
  },

  /* =======================================================
     GET BY SLUG
     GET /api/portfolio/slug/:slug
  ======================================================= */

  getBySlug(slug) {
    return api.get(PORTFOLIO_ENDPOINTS.GET_BY_SLUG(slug));
  },

  /* =======================================================
     EXISTS
     GET /api/portfolio/exists
  ======================================================= */

  exists() {
    return api.get(PORTFOLIO_ENDPOINTS.EXISTS);
  },

  /* =======================================================
     COUNT
     GET /api/portfolio/count
  ======================================================= */

  count() {
    return api.get(PORTFOLIO_ENDPOINTS.COUNT);
  },

  /* =======================================================
     CREATE
     POST /api/portfolio
  ======================================================= */

  create(payload) {
    return api.post(PORTFOLIO_ENDPOINTS.CREATE, payload);
  },

  /* =======================================================
     UPDATE
     PUT /api/portfolio/:id
  ======================================================= */

  update(id, payload) {
    return api.put(PORTFOLIO_ENDPOINTS.UPDATE(id), payload);
  },

  /* =======================================================
     DELETE
     DELETE /api/portfolio/:id
  ======================================================= */

  remove(id) {
    return api.delete(PORTFOLIO_ENDPOINTS.DELETE(id));
  },

  /* =======================================================
     UPDATE STATUS
     PATCH /api/portfolio/:id/status
  ======================================================= */

  updateStatus(id, status) {
    return api.patch(PORTFOLIO_ENDPOINTS.UPDATE_STATUS(id), {
      status,
    });
  },

  /* =======================================================
     REORDER
     PATCH /api/portfolio/reorder
  ======================================================= */

  reorder(payload) {
    return api.patch(PORTFOLIO_ENDPOINTS.REORDER, payload);
  },

  /* =======================================================
     PORTFOLIO IMAGES
  ======================================================= */

  /* -------------------------------------------------------
     UPLOAD MULTIPLE IMAGES
     POST /api/portfolio/:portfolioId/images
  ------------------------------------------------------- */

  uploadImages(portfolioId, formData) {
    return api.post(PORTFOLIO_ENDPOINTS.UPLOAD_IMAGES(portfolioId), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /* -------------------------------------------------------
     DELETE PORTFOLIO IMAGE
     DELETE /api/portfolio/images/:imageId
  ------------------------------------------------------- */

  deleteImage(imageId) {
    return api.delete(PORTFOLIO_ENDPOINTS.DELETE_IMAGE(imageId));
  },
};

/* =========================================================
   EXPORT
========================================================= */

export default portfolioApi;
