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
     DELETE
  ======================================================= */

  remove() {
    return api.delete(HERO_ENDPOINTS.DELETE);
  },
};

export default heroApi;
