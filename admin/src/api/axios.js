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

    /*
     * Authorization
     */
    if (token) {
      config.headers = config.headers || {};

      config.headers.Authorization = `Bearer ${token}`;
    }

    /*
     * FormData
     *
     * Do not manually set multipart/form-data.
     * Axios/browser will automatically generate
     * the required boundary.
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

  async (error) => {
    /*
     * Unauthorized
     *
     * Remove invalid/expired access token.
     *
     * Navigation should be handled by
     * AuthProvider / ProtectedRoute.
     */
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    /*
     * Do not log:
     * - request data
     * - response data
     * - tokens
     * - API URLs
     * - network errors
     * - server errors
     *
     * Let the caller handle the error.
     */
    return Promise.reject(error);
  },
);

/* =========================================================
   Export
========================================================= */

export default api;
