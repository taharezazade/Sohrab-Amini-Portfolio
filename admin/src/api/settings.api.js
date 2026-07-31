/** @format */

import api from "./axios.js";

const settingsApi = {
  /* =======================================================
      Get Settings
  ======================================================= */

  getSettings() {
    return api.get("/settings");
  },

  /* =======================================================
      Create Settings
  ======================================================= */

  createSettings(data) {
    return api.post("/settings", data);
  },

  /* =======================================================
      Update Settings
  ======================================================= */

  updateSettings(data) {
    return api.put("/settings", data);
  },

  /* =======================================================
      Delete Settings
  ======================================================= */

  deleteSettings() {
    return api.delete("/settings");
  },
};

export default settingsApi;
