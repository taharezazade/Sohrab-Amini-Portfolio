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

  /*
   * Required because backend CORS uses credentials: true.
   */
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

    /*
     * Attach access token when available.
     */
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    /*
     * FormData
     *
     * Let the browser/Axios automatically generate
     * the multipart/form-data boundary.
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
    /*
     * Unauthorized
     *
     * Remove expired/invalid access token.
     */
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    return Promise.reject(error);
  },
);

/* =========================================================
   Export
========================================================= */

export default api;
