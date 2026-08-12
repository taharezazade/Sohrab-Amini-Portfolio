/** @format */

import api from "@/api/axios";

import { PORTFOLIO_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Portfolio API
========================================================= */

const portfolioApi = {
  /* =======================================================
     GET ALL
  ======================================================= */

  getAll() {
    return api.get(PORTFOLIO_ENDPOINTS.GET_ALL);
  },

  /* =======================================================
     GET PUBLISHED
  ======================================================= */

  getPublished() {
    return api.get(PORTFOLIO_ENDPOINTS.GET_PUBLISHED);
  },

  /* =======================================================
     GET FEATURED
  ======================================================= */

  getFeatured() {
    return api.get(PORTFOLIO_ENDPOINTS.GET_FEATURED);
  },

  /* =======================================================
     GET BY ID
  ======================================================= */

  getById(id) {
    return api.get(PORTFOLIO_ENDPOINTS.GET_BY_ID(id));
  },

  /* =======================================================
     GET BY SLUG
  ======================================================= */

  getBySlug(slug) {
    return api.get(PORTFOLIO_ENDPOINTS.GET_BY_SLUG(slug));
  },

  /* =======================================================
     EXISTS
  ======================================================= */

  exists() {
    return api.get(PORTFOLIO_ENDPOINTS.EXISTS);
  },

  /* =======================================================
     COUNT
  ======================================================= */

  count() {
    return api.get(PORTFOLIO_ENDPOINTS.COUNT);
  },

  /* =======================================================
     CREATE
  ======================================================= */

  create(payload) {
    return api.post(PORTFOLIO_ENDPOINTS.CREATE, payload);
  },

  /* =======================================================
     UPDATE
  ======================================================= */

  update(id, payload) {
    return api.put(PORTFOLIO_ENDPOINTS.UPDATE(id), payload);
  },

  /* =======================================================
     DELETE
  ======================================================= */

  remove(id) {
    return api.delete(PORTFOLIO_ENDPOINTS.DELETE(id));
  },

  /* =======================================================
     UPDATE STATUS
  ======================================================= */

  updateStatus(id, payload) {
    return api.patch(PORTFOLIO_ENDPOINTS.UPDATE_STATUS(id), payload);
  },

  /* =======================================================
     UPDATE IMAGE
  ======================================================= */

  updateImage(id, payload) {
    return api.put(PORTFOLIO_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  /* =======================================================
     CLEAR IMAGE
  ======================================================= */

  clearImage(id) {
    return api.delete(PORTFOLIO_ENDPOINTS.CLEAR_IMAGE(id));
  },

  /* =======================================================
     UPLOAD IMAGES
  ======================================================= */

  uploadImages(id, formData) {
    return api.post(PORTFOLIO_ENDPOINTS.UPLOAD_IMAGES(id), formData);
  },

  /* =======================================================
     DELETE IMAGE
  ======================================================= */

  deleteImage(id) {
    return api.delete(PORTFOLIO_ENDPOINTS.DELETE_IMAGE(id));
  },

  /* =======================================================
     REORDER
  ======================================================= */

  reorder(payload) {
    return api.patch(PORTFOLIO_ENDPOINTS.REORDER, payload);
  },
};

export default portfolioApi;
