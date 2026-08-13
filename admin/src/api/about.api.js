/** @format */

import api from "@/api/axios";
import { ABOUT_ENDPOINTS } from "@/api/endpoints";

const aboutApi = {
  /* =========================================================
     GET ABOUT
  ========================================================= */

  get() {
    return api.get(ABOUT_ENDPOINTS.BASE);
  },

  /* =========================================================
     UPDATE ABOUT
  ========================================================= */

  update(payload) {
    return api.put(ABOUT_ENDPOINTS.BASE, payload);
  },
};

export default aboutApi;
