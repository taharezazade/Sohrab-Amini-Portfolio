/** @format */

import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

/* =======================================================
    Request Interceptor
======================================================= */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);

/* =======================================================
    Response Interceptor
======================================================= */

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Access Token Expired
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/login") &&
      !originalRequest.url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          `${
            import.meta.env.VITE_API_URL || "http://localhost:5000/api"
          }/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          },
        );

        localStorage.setItem("accessToken", data.data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;

        return api(originalRequest);
      } catch {
        localStorage.removeItem("accessToken");
        // Session Expired
        toast.error("نشست شما منقضی شده است. لطفاً دوباره وارد شوید.");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
    }

    // Backend Errors
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    }

    // Network Error
    else if (error.code === "ERR_NETWORK") {
      toast.error("ارتباط با سرور برقرار نشد.");
    }

    // Timeout
    else if (error.code === "ECONNABORTED") {
      toast.error("زمان درخواست به پایان رسید.");
    }

    // Unknown Error
    else {
      toast.error("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    }

    return Promise.reject(error);
  },
);

export default api;
