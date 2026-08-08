/** @format */

export const ENV = {
  MODE: import.meta.env.MODE,
};

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",

  TIMEOUT: 10000,
};
