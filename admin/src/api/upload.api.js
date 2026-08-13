/** @format */

import api from "@/api/axios";

const uploadApi = {
  /* =========================================================
     Single Upload
  ========================================================= */

  single(formData) {
    return api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /* =========================================================
     Multiple Upload
  ========================================================= */

  multiple(formData) {
    return api.post("/upload/multiple", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /* =========================================================
     Replace Upload
  ========================================================= */

  replace(formData) {
    return api.put("/upload/replace", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /* =========================================================
     Delete Upload
  ========================================================= */

  delete(path) {
    return api.delete("/upload", {
      data: {
        path,
      },
    });
  },
};

export default uploadApi;
