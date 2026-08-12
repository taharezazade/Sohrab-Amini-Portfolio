/** @format */

import api from "@/api/axios";

import { UPLOAD_ENDPOINTS } from "@/api/endpoints";

/* =========================================================
   Upload API
========================================================= */

const uploadApi = {
  /* =======================================================
     SINGLE
  ======================================================= */

  uploadSingle(file, folder = "temp") {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("folder", folder);

    return api.post(UPLOAD_ENDPOINTS.SINGLE, formData);
  },

  /* =======================================================
     MULTIPLE
  ======================================================= */

  uploadMultiple(files, folder = "temp") {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("folder", folder);

    return api.post(UPLOAD_ENDPOINTS.MULTIPLE, formData);
  },

  /* =======================================================
     REPLACE
  ======================================================= */

  replace(oldFilePath, file, folder = "temp") {
    const formData = new FormData();

    formData.append("oldFilePath", oldFilePath);

    formData.append("file", file);

    formData.append("folder", folder);

    return api.put(UPLOAD_ENDPOINTS.REPLACE, formData);
  },

  /* =======================================================
     DELETE
  ======================================================= */

  remove(path) {
    return api.delete(UPLOAD_ENDPOINTS.DELETE, {
      data: {
        path,
      },
    });
  },
};

export default uploadApi;
