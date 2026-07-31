/** @format */

import api from "./axios.js";

const aboutApi = {
  /* =======================================================
      Get About
  ======================================================= */

  getAbout() {
    return api.get("/about");
  },

  /* =======================================================
      Create About
  ======================================================= */

  createAbout(data) {
    return api.post("/about", data);
  },

  /* =======================================================
      Update About
  ======================================================= */

  updateAbout(data) {
    return api.put("/about", data);
  },

  /* =======================================================
      Delete About
  ======================================================= */

  deleteAbout() {
    return api.delete("/about");
  },
};

export default aboutApi;
