/** @format */

import api from "@/api/axios";

import { CONTACT_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Contact API
========================================================= */

const contactApi = {
  get() {
    return api.get(CONTACT_ENDPOINTS.GET);
  },

  getById(id) {
    return api.get(CONTACT_ENDPOINTS.GET_BY_ID(id));
  },

  exists() {
    return api.get(CONTACT_ENDPOINTS.EXISTS);
  },

  count() {
    return api.get(CONTACT_ENDPOINTS.COUNT);
  },

  create(payload) {
    return api.post(CONTACT_ENDPOINTS.CREATE, payload);
  },

  update(id, payload) {
    return api.put(CONTACT_ENDPOINTS.UPDATE(id), payload);
  },

  upsert(payload) {
    return api.post(CONTACT_ENDPOINTS.UPSERT, payload);
  },

  remove(id) {
    return api.delete(CONTACT_ENDPOINTS.DELETE(id));
  },

  updatePhone(id, phone) {
    return api.put(CONTACT_ENDPOINTS.PHONE(id), {
      phone,
    });
  },

  updateWhatsapp(id, whatsapp) {
    return api.put(CONTACT_ENDPOINTS.WHATSAPP(id), {
      whatsapp,
    });
  },

  updateImage(id, payload) {
    return api.put(CONTACT_ENDPOINTS.UPDATE_IMAGE(id), payload);
  },

  clearImage(id) {
    return api.delete(CONTACT_ENDPOINTS.CLEAR_IMAGE(id));
  },
};

export default contactApi;
