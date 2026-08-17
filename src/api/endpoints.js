/** @format */

export const AUTH_ENDPOINTS = {
  ME: "/auth/me",
  PROFILE: "/auth/profile",
};

export const HERO_ENDPOINTS = {
  GET: "/hero",
  GET_BY_ID: (id) => `/hero/${id}`,
};

export const ABOUT_ENDPOINTS = {
  GET: "/about",
};

export const SERVICES_ENDPOINTS = {
  GET_ALL: "/services",
  GET_ACTIVE: "/services/active",
  STATS: "/services/stats",
  GET_BY_ID: (id) => `/services/${id}`,
  CREATE: "/services",
  UPDATE: (id) => `/services/${id}`,
  DELETE: (id) => `/services/${id}`,
  TOGGLE_STATUS: (id) => `/services/${id}/status`,
  REORDER: "/services/reorder",
  SEARCH_TECHNOLOGIES: "/services/technologies/search",
};

export const PORTFOLIO_ENDPOINTS = {
  GET: "/portfolio",
  GET_PUBLISHED: "/portfolio/published",
  GET_FEATURED: "/portfolio/featured",
  GET_BY_ID: (id) => `/portfolio/${id}`,
  GET_BY_SLUG: (slug) => `/portfolio/slug/${slug}`,
};

export const CONTACT_ENDPOINTS = {
  GET: "/contact",

  GET_BY_ID: (id) => `/contact/${id}`,

  CREATE: "/contact",

  UPDATE: "/contact",

  UPDATE_BY_ID: (id) => `/contact/${id}`,

  UPDATE_PHONE: (id) => `/contact/${id}/phone`,

  UPDATE_WHATSAPP: (id) => `/contact/${id}/whatsapp`,

  UPDATE_IMAGE: (id) => `/contact/${id}/image`,

  CLEAR_IMAGE: (id) => `/contact/${id}/image`,

  DELETE: (id) => `/contact/${id}`,
};

export const SETTINGS_ENDPOINTS = {
  GET: "/settings",
};
