/** @format */

import api from "@/api/axios";
import { UPLOAD_ENDPOINTS } from "@/api/endpoints";

const uploadService = {
  async upload(file, folder = "temp") {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("folder", folder);

    return await api.post(UPLOAD_ENDPOINTS.SINGLE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async uploadMultiple(files, folder = "temp") {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("folder", folder);

    return await api.post(UPLOAD_ENDPOINTS.MULTIPLE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async replace(oldFilePath, file, folder = "temp") {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("oldFilePath", oldFilePath || "");
    formData.append("folder", folder);

    return await api.put(UPLOAD_ENDPOINTS.REPLACE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async deleteFile(path) {
    return await api.delete(UPLOAD_ENDPOINTS.DELETE, {
      data: {
        path,
      },
    });
  },
};

export default uploadService;
