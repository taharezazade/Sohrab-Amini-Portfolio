/** @format */

import axios from "axios";

import { API_CONFIG } from "./env";
import { STORAGE_KEYS } from "@/constants/storage";

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,

  timeout: API_CONFIG.TIMEOUT,

  headers: {
    "Content-Type": "application/json",
  },
});

/*
  Request Interceptor
*/

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

/*
  Response Interceptor
*/

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    return Promise.reject(error);
  },
);

export default api;
