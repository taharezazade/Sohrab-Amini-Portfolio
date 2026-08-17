/** @format */

import api from "@/api/axios";
import { CONTACT_ENDPOINTS } from "@/api/endpoints";

const contactApi = {
  async get() {
    return api.get(CONTACT_ENDPOINTS.GET);
  },

  async update(payload) {
    return api.put(CONTACT_ENDPOINTS.UPDATE, payload);
  },

  async updateImage(id, file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.patch(CONTACT_ENDPOINTS.UPDATE_IMAGE(id), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async clearImage(id) {
    return api.delete(CONTACT_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default contactApi;
