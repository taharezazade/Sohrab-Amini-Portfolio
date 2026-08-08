/** @format */

const ROUTES = {
  // Public Routes
  AUTH: {
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },

  // Dashboard Routes
  DASHBOARD: {
    ROOT: "/dashboard",

    HERO: "/hero",

    ABOUT: "/about",

    SERVICES: "/services",

    PORTFOLIO: "/portfolio",

    CONTACT: "/contact",

    SETTINGS: "/settings",

    PROFILE: "/profile",
  },

  // Error Routes
  ERROR: {
    NOT_FOUND: "/404",
    SERVER_ERROR: "/500",
  },

  // Fallback
  HOME: "/",
};

export default ROUTES;
