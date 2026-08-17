/** @format */

/**
 * API Endpoints
 *
 * Base URL is provided by Axios.
 *
 * Example:
 * API_CONFIG.BASE_URL = http://localhost:5000/api
 *
 * Therefore:
 * AUTH.LOGIN -> /auth/login
 */

////////////////////////////////////////////////////////////
// AUTH
////////////////////////////////////////////////////////////

export const AUTH_ENDPOINTS = {
  REGISTER: "/auth/register",

  LOGIN: "/auth/login",

  REFRESH_TOKEN: "/auth/refresh-token",

  ME: "/auth/me",

  PROFILE: "/auth/profile",

  CHANGE_PASSWORD: "/auth/change-password",

  LOGOUT: "/auth/logout",
};

////////////////////////////////////////////////////////////
// PROFILE
////////////////////////////////////////////////////////////

export const PROFILE_ENDPOINTS = {
  GET: "/profile",

  UPDATE: "/profile",

  CHANGE_PASSWORD: "/profile/change-password",
};

////////////////////////////////////////////////////////////
// HERO
////////////////////////////////////////////////////////////

export const HERO_ENDPOINTS = {
  GET: "/hero",

  GET_BY_ID: (id) => `/hero/${id}`,

  CREATE: "/hero",

  UPDATE: (id) => `/hero/${id}`,

  DELETE: (id) => `/hero/${id}`,

  TOGGLE_ACTIVE: (id) => `/hero/${id}/active`,
};

////////////////////////////////////////////////////////////
// ABOUT
////////////////////////////////////////////////////////////

export const ABOUT_ENDPOINTS = {
  GET: "/about",

  GET_BY_ID: (id) => `/about/${id}`,

  CREATE: "/about",

  UPDATE: (id) => `/about/${id}`,

  DELETE: (id) => `/about/${id}`,
};

////////////////////////////////////////////////////////////
// SERVICES
////////////////////////////////////////////////////////////

export const SERVICES_ENDPOINTS = {
  GET: "/services",

  GET_BY_ID: (id) => `/services/${id}`,

  CREATE: "/services",

  UPDATE: (id) => `/services/${id}`,

  DELETE: (id) => `/services/${id}`,

  EXISTS: "/services/exists",

  COUNT: "/services/count",

  ACTIVE: "/services/active",

  REORDER: "/services/reorder",
};

////////////////////////////////////////////////////////////
// PORTFOLIO
////////////////////////////////////////////////////////////

export const PORTFOLIO_ENDPOINTS = {
  GET_ALL: "/portfolio",
  GET_PUBLISHED: "/portfolio/published",
  GET_FEATURED: "/portfolio/featured",

  GET_BY_ID: (id) => `/portfolio/${id}`,
  GET_BY_SLUG: (slug) => `/portfolio/slug/${slug}`,

  CREATE: "/portfolio",

  UPDATE: (id) => `/portfolio/${id}`,
  DELETE: (id) => `/portfolio/${id}`,

  UPDATE_STATUS: (id) => `/portfolio/${id}/status`,
  UPDATE_ORDER: (id) => `/portfolio/${id}/order`,
  UPDATE_FEATURED: (id) => `/portfolio/${id}/featured`,
};

////////////////////////////////////////////////////////////
// PORTFOLIO IMAGES
////////////////////////////////////////////////////////////

export const PORTFOLIO_IMAGE_ENDPOINTS = {
  GET_ALL: (portfolioId) => `/portfolio/${portfolioId}/images`,

  GET_BY_ID: (portfolioId, imageId) =>
    `/portfolio/${portfolioId}/images/${imageId}`,

  CREATE: (portfolioId) => `/portfolio/${portfolioId}/images`,

  UPDATE: (portfolioId, imageId) =>
    `/portfolio/${portfolioId}/images/${imageId}`,

  UPDATE_ORDER: (portfolioId, imageId) =>
    `/portfolio/${portfolioId}/images/${imageId}/order`,

  DELETE: (portfolioId, imageId) =>
    `/portfolio/${portfolioId}/images/${imageId}`,

  DELETE_ALL: (portfolioId) => `/portfolio/${portfolioId}/images`,
};

////////////////////////////////////////////////////////////
// CONTACT
////////////////////////////////////////////////////////////

export const CONTACT_ENDPOINTS = {
  GET: "/contact",

  GET_BY_ID: (id) => `/contact/${id}`,

  CREATE: "/contact",

  UPDATE: "/contact",

  DELETE: (id) => `/contact/${id}`,

  UPDATE_IMAGE: (id) => `/contact/${id}/image`,

  CLEAR_IMAGE: (id) => `/contact/${id}/image`,
};
////////////////////////////////////////////////////////////
// SETTINGS
////////////////////////////////////////////////////////////

export const SETTINGS_ENDPOINTS = {
  GET: "/settings",

  GET_BY_ID: (id) => `/settings/${id}`,

  CREATE: "/settings",

  UPDATE: (id) => `/settings/${id}`,

  DELETE: (id) => `/settings/${id}`,
};

////////////////////////////////////////////////////////////
// SEARCH
////////////////////////////////////////////////////////////

export const SEARCH_ENDPOINTS = {
  /**
   * Global admin search.
   *
   * Example:
   * GET /api/search?q=portfolio
   */
  SEARCH: "/search",

  /**
   * Search portfolios.
   *
   * Example:
   * GET /api/search/portfolio?q=wordpress
   */
  PORTFOLIO: "/search/portfolio",

  /**
   * Search services.
   *
   * Example:
   * GET /api/search/services?q=wordpress
   */
  SERVICES: "/search/services",

  /**
   * Search all content.
   *
   * Example:
   * GET /api/search/all?q=wordpress
   */
  ALL: "/search/all",
};

////////////////////////////////////////////////////////////
// UPLOAD
////////////////////////////////////////////////////////////

export const UPLOAD_ENDPOINTS = {
  SINGLE: "/upload",

  MULTIPLE: "/upload/multiple",

  DELETE: (filename) => `/upload/${filename}`,
};

////////////////////////////////////////////////////////////
// API ENDPOINTS OBJECT
////////////////////////////////////////////////////////////

const ENDPOINTS = {
  AUTH: AUTH_ENDPOINTS,

  PROFILE: PROFILE_ENDPOINTS,

  HERO: HERO_ENDPOINTS,

  ABOUT: ABOUT_ENDPOINTS,

  SERVICES: SERVICES_ENDPOINTS,

  PORTFOLIO: PORTFOLIO_ENDPOINTS,

  PORTFOLIO_IMAGE: PORTFOLIO_IMAGE_ENDPOINTS,

  CONTACT: CONTACT_ENDPOINTS,

  SETTINGS: SETTINGS_ENDPOINTS,

  SEARCH: SEARCH_ENDPOINTS,

  UPLOAD: UPLOAD_ENDPOINTS,
};

export default ENDPOINTS;
