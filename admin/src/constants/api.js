/** @format */

const API = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    PROFILE: "/auth/profile",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  HERO: {
    GET: "/hero",
    UPDATE: "/hero",
  },

  ABOUT: {
    GET: "/about",
    UPDATE: "/about",
  },

  SERVICES: {
    GET_ALL: "/services",
    CREATE: "/services",
    UPDATE: (id) => `/services/${id}`,
    DELETE: (id) => `/services/${id}`,
  },

  PORTFOLIO: {
    GET_ALL: "/portfolio",
    CREATE: "/portfolio",
    UPDATE: (id) => `/portfolio/${id}`,
    DELETE: (id) => `/portfolio/${id}`,
  },

  CONTACT: {
    GET: "/contact",
    UPDATE: "/contact",
  },

  SETTINGS: {
    GET: "/settings",
    UPDATE: "/settings",
  },

  UPLOAD: {
    IMAGE: "/upload",
    HERO: "/upload/hero",
    ABOUT: "/upload/about",
    SERVICES: "/upload/services",
    PORTFOLIO: "/upload/portfolio",
  },
};

export default API;
