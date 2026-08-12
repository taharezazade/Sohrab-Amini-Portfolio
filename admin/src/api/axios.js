/** @format */

import axios from "axios";

import { STORAGE_KEYS } from "@/constants/storage";
import { API_CONFIG } from "@/config/env";

/* =========================================================
   Axios Instance
========================================================= */

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,

  timeout: API_CONFIG.TIMEOUT,

  withCredentials: true,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/* =========================================================
   Request Interceptor
========================================================= */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    /*
     * FormData
     *
     * Let the browser/Axios automatically
     * generate multipart/form-data boundary.
     */

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
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

    if (status === 401) {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    return Promise.reject(error);
  },
);

export default api;
