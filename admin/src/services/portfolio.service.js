/** @format */

import api from "@/api/axios";
import API from "@/constants/api";

const portfolioService = {
  /**
   * Get All Portfolio Items
   */
  getAll() {
    return api.get(API.GET_ALL);
  },

  /**
   * Get Portfolio By ID
   */
  getById(id) {
    return api.get(API.GET_BY_ID(id));
  },

  /**
   * Create Portfolio
   */
  create(payload) {
    return api.post(API.CREATE, payload);
  },

  /**
   * Update Portfolio
   */
  update(id, payload) {
    return api.put(API.UPDATE(id), payload);
  },

  /**
   * Delete Portfolio
   */
  remove(id) {
    return api.delete(API.DELETE(id));
  },

  /**
   * Upload Portfolio Images
   */
  uploadImages(id, formData) {
    return api.post(API.UPLOAD_IMAGES(id), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /**
   * Delete Portfolio Image
   */
  deleteImage(id) {
    return api.delete(API.DELETE_IMAGE(id));
  },

  /**
   * Reorder Portfolio Items
   */
  reorder(payload) {
    return api.patch(API.REORDER, payload);
  },
};

export default portfolioService;
