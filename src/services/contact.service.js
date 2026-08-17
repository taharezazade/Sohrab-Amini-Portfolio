/** @format */

import api from "@/api/axios";
import { CONTACT_ENDPOINTS } from "@/api/endpoints";

const contactService = {
  async get() {
    return await api.get(CONTACT_ENDPOINTS.GET);
  },

  async update(payload) {
    return await api.put(CONTACT_ENDPOINTS.UPDATE, payload);
  },
};

export default contactService;
