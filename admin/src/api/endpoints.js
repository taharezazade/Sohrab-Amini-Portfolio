/** @format */

// Auth

export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
  ME: "/auth/me",
};

// Profile

export const PROFILE_ENDPOINTS = {
  GET: "/profile",
  UPDATE: "/profile",
  CHANGE_PASSWORD: "/profile/password",
  DELETE_IMAGE: "/profile/image",
};

// Hero

export const HERO_ENDPOINTS = {
  GET: "/hero",
  UPDATE: "/hero",
};

// About

export const ABOUT_ENDPOINTS = {
  GET: "/about",
  UPDATE: "/about",
};

// Services

export const SERVICES_ENDPOINTS = {
  GET_ALL: "/services",
  GET_BY_ID: (id) => `/services/${id}`,
  CREATE: "/services",
  UPDATE: (id) => `/services/${id}`,
  DELETE: (id) => `/services/${id}`,
  REORDER: "/services/reorder",
};

// Portfolio

export const PORTFOLIO_ENDPOINTS = {
  GET_ALL: "/portfolio",
  GET_BY_ID: (id) => `/portfolio/${id}`,
  CREATE: "/portfolio",
  UPDATE: (id) => `/portfolio/${id}`,
  DELETE: (id) => `/portfolio/${id}`,
  UPLOAD_IMAGES: (id) => `/portfolio/${id}/images`,
  DELETE_IMAGE: (id) => `/portfolio/images/${id}`,
  REORDER: "/portfolio/reorder",
};

// Contact

export const CONTACT_ENDPOINTS = {
  GET: "/contact",
  UPDATE: "/contact",
};

// Settings

export const SETTINGS_ENDPOINTS = {
  GET: "/settings",
  UPDATE: "/settings",
};

// Dashboard

export const DASHBOARD_ENDPOINTS = {
  STATS: "/dashboard",
};

