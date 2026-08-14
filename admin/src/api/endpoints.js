/** @format */

/* =========================================================
   AUTHENTICATION
========================================================= */

export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
  PROFILE: "/auth/profile",
  CHANGE_PASSWORD: "/auth/change-password",
};

/* =========================================================
   HERO
========================================================= */

export const HERO_ENDPOINTS = {
  GET: "/hero",
  GET_BY_ID: (id) => `/hero/${id}`,

  CREATE: "/hero",
  UPDATE: "/hero",

  UPSERT: "/hero/upsert",

  STATUS: "/hero/status",

  DELETE: "/hero",
};

/* =========================================================
   ABOUT
   About is a single record.
   Admin updates the existing record.
========================================================= */

export const ABOUT_ENDPOINTS = {
  BASE: "/about",
};

/* =========================================================
   SERVICES
========================================================= */

export const SERVICES_ENDPOINTS = {
  GET_ALL: "/services",

  GET_ACTIVE: "/services/active",

  STATS: "/services/stats",

  GET_BY_ID: (id) => `/services/${id}`,

  CREATE: "/services",

  UPDATE: (id) => `/services/${id}`,

  TOGGLE_STATUS: (id) => `/services/${id}/status`,

  DELETE: (id) => `/services/${id}`,

  REORDER: "/services/reorder",
};

/* =========================================================
   PORTFOLIO
========================================================= */

export const PORTFOLIO_ENDPOINTS = {
  GET_ALL: "/portfolio",
  GET_PUBLISHED: "/portfolio/published",
  GET_FEATURED: "/portfolio/featured",

  GET_BY_ID: (id) => `/portfolio/${id}`,
  GET_BY_SLUG: (slug) => `/portfolio/slug/${slug}`,

  EXISTS: "/portfolio/exists",
  COUNT: "/portfolio/count",

  CREATE: "/portfolio",
  UPDATE: (id) => `/portfolio/${id}`,
  DELETE: (id) => `/portfolio/${id}`,

  UPDATE_STATUS: (id) => `/portfolio/${id}/status`,

  UPDATE_IMAGE: (id) => `/portfolio/${id}/image`,
  CLEAR_IMAGE: (id) => `/portfolio/${id}/image`,

  UPLOAD_IMAGES: (id) => `/portfolio/${id}/images`,
  DELETE_IMAGE: (id) => `/portfolio/images/${id}`,

  REORDER: "/portfolio/reorder",
};

/* =========================================================
   CONTACT
========================================================= */

export const CONTACT_ENDPOINTS = {
  GET: "/contact",
  GET_BY_ID: (id) => `/contact/${id}`,

  EXISTS: "/contact/exists",
  COUNT: "/contact/count",

  CREATE: "/contact",
  UPDATE: (id) => `/contact/${id}`,

  UPSERT: "/contact/upsert",

  DELETE: (id) => `/contact/${id}`,

  PHONE: (id) => `/contact/${id}/phone`,
  WHATSAPP: (id) => `/contact/${id}/whatsapp`,

  UPDATE_IMAGE: (id) => `/contact/${id}/image`,
  CLEAR_IMAGE: (id) => `/contact/${id}/image`,
};

/* =========================================================
   SETTINGS
========================================================= */

export const SETTINGS_ENDPOINTS = {
  GET: "/settings",

  CREATE: "/settings",
  UPDATE: "/settings",
  DELETE: "/settings",
};

/* =========================================================
   UPLOAD
========================================================= */

export const UPLOAD_ENDPOINTS = {
  SINGLE: "/upload",
  MULTIPLE: "/upload/multiple",
  REPLACE: "/upload/replace",
  DELETE: "/upload",
};
