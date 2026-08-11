/** @format */

import api from "@/api/axios";
import { CONTACT_ENDPOINTS } from "@/api/endpoints";

const contactService = {
  async getContact() {
    return await api.get(CONTACT_ENDPOINTS.GET);
  },

  async getContactById(id) {
    return await api.get(CONTACT_ENDPOINTS.GET_BY_ID(id));
  },

  async exists() {
    return await api.get(CONTACT_ENDPOINTS.EXISTS);
  },

  async count() {
    return await api.get(CONTACT_ENDPOINTS.COUNT);
  },

  async createContact(payload) {
    return await api.post(CONTACT_ENDPOINTS.CREATE, payload);
  },

  async updateContact(id, payload) {
    return await api.put(CONTACT_ENDPOINTS.UPDATE(id), payload);
  },

  async upsertContact(payload) {
    return await api.post(CONTACT_ENDPOINTS.UPSERT, payload);
  },

  async updatePhone(id, phone) {
    return await api.put(CONTACT_ENDPOINTS.PHONE(id), { phone });
  },

  async updateWhatsapp(id, whatsapp) {
    return await api.put(CONTACT_ENDPOINTS.WHATSAPP(id), { whatsapp });
  },

  async updateImage(id, payload) {
    return await api.put(CONTACT_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  async clearImage(id) {
    return await api.delete(CONTACT_ENDPOINTS.CLEAR_IMAGE(id));
  },

  async deleteContact(id) {
    return await api.delete(CONTACT_ENDPOINTS.DELETE(id));
  },
};

export default contactService;
