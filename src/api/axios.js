/** @format */

import axios from "axios";

/* =========================================================
   Axios Instance
========================================================= */

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
     * FormData
     *
     * Let Axios/browser generate the multipart boundary.
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
    /*
     * Unauthorized
     *
     * Remove invalid/expired access token.
     */
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
    }

    /*
     * Do not log errors here.
     * Do not expose API response data.
     * Do not show toast from Axios.
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
