/** @format */

import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

/*
===========================
 Request Interceptor
===========================
*/

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

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
===========================
 Response Interceptor
===========================
*/

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    const message = error.response?.data?.message || "Server error occurred.";

    if (status !== 401) {
      toast.error(message);
    }

    if (status === 401) {
      localStorage.removeItem("accessToken");
    }

    return Promise.reject(error);
  },
);

export default api;
