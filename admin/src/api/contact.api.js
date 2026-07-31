/** @format */

import api from "./axios.js";

const contactApi = {
  /* =======================================================
      Get Contact Information
  ======================================================= */

  getContact() {
    return api.get("/contact");
  },

  /* =======================================================
      Create Contact Information
  ======================================================= */

  createContact(data) {
    return api.post("/contact", data);
  },

  /* =======================================================
      Update Contact Information
  ======================================================= */

  updateContact(data) {
    return api.put("/contact", data);
  },

  /* =======================================================
      Delete Contact Information
  ======================================================= */

  deleteContact() {
    return api.delete("/contact");
  },
};

export default contactApi;
