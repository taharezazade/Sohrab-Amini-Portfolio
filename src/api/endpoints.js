/** @format */

/* =========================================================
   AUTHENTICATION
   Public frontend does not manage authentication.
========================================================= */

export const AUTH_ENDPOINTS = {
  ME: "/auth/me",
  PROFILE: "/auth/profile",
};

/* =========================================================
   HERO
========================================================= */

export const HERO_ENDPOINTS = {
  GET: "/hero",
  GET_BY_ID: (id) => `/hero/${id}`,
};

/* =========================================================
   ABOUT
   Public frontend is READ-ONLY.
========================================================= */

export const ABOUT_ENDPOINTS = {
  GET: "/about",
};

/* =========================================================
   SERVICES
========================================================= */

export const SERVICES_ENDPOINTS = {
  GET: "/services",
  GET_BY_ID: (id) => `/services/${id}`,
};

/* =========================================================
   PORTFOLIO
========================================================= */

export const PORTFOLIO_ENDPOINTS = {
  GET: "/portfolio",
  GET_PUBLISHED: "/portfolio/published",
  GET_FEATURED: "/portfolio/featured",
  GET_BY_ID: (id) => `/portfolio/${id}`,
  GET_BY_SLUG: (slug) => `/portfolio/slug/${slug}`,
};

/* =========================================================
   CONTACT
========================================================= */

export const CONTACT_ENDPOINTS = {
  GET: "/contact",
  GET_BY_ID: (id) => `/contact/${id}`,
};

/* =========================================================
   SETTINGS
========================================================= */

export const SETTINGS_ENDPOINTS = {
  GET: "/settings",
};
