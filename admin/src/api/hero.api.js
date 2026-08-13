/** @format */

import api from "@/api/axios";

import { HERO_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Hero API
========================================================= */

const heroApi = {
  /* =======================================================
     GET
  ======================================================= */

  get() {
    return api.get(HERO_ENDPOINTS.GET);
  },

  /* =======================================================
     GET BY ID
  ======================================================= */

  getById(id) {
    return api.get(HERO_ENDPOINTS.GET_BY_ID(id));
  },

  /* =======================================================
     CREATE
  ======================================================= */

  create(payload) {
    return api.post(HERO_ENDPOINTS.CREATE, payload);
  },

  /* =======================================================
     UPDATE
  ======================================================= */

  update(payload) {
    return api.put(HERO_ENDPOINTS.UPDATE, payload);
  },

  /* =======================================================
     UPSERT
  ======================================================= */

  upsert(payload) {
    return api.put(HERO_ENDPOINTS.UPSERT, payload);
  },

  /* =======================================================
     TOGGLE STATUS
  ======================================================= */

  toggleStatus(isActive) {
    return api.patch(HERO_ENDPOINTS.STATUS, {
      isActive,
    });
  },

  /* =======================================================
     DELETE
  ======================================================= */

  remove() {
    return api.delete(HERO_ENDPOINTS.DELETE);
  },
};

export default heroApi;
