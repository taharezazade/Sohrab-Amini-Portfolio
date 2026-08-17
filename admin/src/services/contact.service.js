/** @format */

import api from "@/api/axios";
import { CONTACT_ENDPOINTS } from "@/api/endpoints";

const contactService = {
  /**
   * Get public contact information
   *
   * GET /api/contact
   */
  async get() {
    return await api.get(CONTACT_ENDPOINTS.GET);
  },
};

export default contactService;
