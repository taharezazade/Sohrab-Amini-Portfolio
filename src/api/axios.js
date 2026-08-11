/** @format */

import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  withCredentials: true,

  headers: {
    Accept: "application/json",
  },
});

/* =========================================================
   Request Interceptor
========================================================= */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    /*
     * Do NOT manually set Content-Type for FormData.
     * Axios/browser will automatically set:
     *
     * multipart/form-data; boundary=...
     */

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

/* =========================================================
   Response Interceptor
========================================================= */

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const status = error.response?.status;

    const message =
      error.response?.data?.message ||
      error.message ||
      "Server error occurred.";

    if (status === 401) {
      localStorage.removeItem("accessToken");

      toast.error("Your session has expired.");
    } else {
      toast.error(message);
    }

    return Promise.reject(error);
  },
);

export default api;
