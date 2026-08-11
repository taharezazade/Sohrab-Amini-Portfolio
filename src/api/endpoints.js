/** @format */

/* =========================================================
   AUTHENTICATION
========================================================= */

export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  PROFILE: "/auth/profile",
  ME: "/auth/me",
};

/* =========================================================
   HERO
========================================================= */

export const HERO_ENDPOINTS = {
  GET: "/hero",
  CREATE: "/hero",
  UPDATE: "/hero",
  DELETE: "/hero",
};

/* =========================================================
   ABOUT
========================================================= */

export const ABOUT_ENDPOINTS = {
  GET: "/about",

  GET_BY_ID: (id) => `/about/${id}`,

  EXISTS: "/about/exists",

  COUNT: "/about/count",

  CREATE: "/about",

  UPDATE: "/about",

  UPDATE_BY_ID: (id) => `/about/${id}`,

  UPSERT: "/about/upsert",

  DELETE: "/about",

  DELETE_BY_ID: (id) => `/about/${id}`,

  UPDATE_IMAGE: (id) => `/about/${id}/image`,

  CLEAR_IMAGE: (id) => `/about/${id}/image`,
};

/* =========================================================
   SERVICES
========================================================= */

export const SERVICES_ENDPOINTS = {
  GET: "/services",

  GET_BY_ID: (id) => `/services/${id}`,

  EXISTS: "/services/exists",

  COUNT: "/services/count",

  CREATE: "/services",

  UPDATE: (id) => `/services/${id}`,

  DELETE: (id) => `/services/${id}`,

  UPDATE_IMAGE: (id) => `/services/${id}/image`,

  CLEAR_IMAGE: (id) => `/services/${id}/image`,
};

/* =========================================================
   PORTFOLIO
========================================================= */

export const PORTFOLIO_ENDPOINTS = {
  GET: "/portfolio",

  GET_BY_ID: (id) => `/portfolio/${id}`,

  EXISTS: "/portfolio/exists",

  COUNT: "/portfolio/count",

  CREATE: "/portfolio",

  UPDATE: (id) => `/portfolio/${id}`,

  DELETE: (id) => `/portfolio/${id}`,

  UPDATE_IMAGE: (id) => `/portfolio/${id}/image`,

  CLEAR_IMAGE: (id) => `/portfolio/${id}/image`,
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
