/** @format */

/*
    API Messages
*/

export const MESSAGES = Object.freeze({
  SUCCESS: {
    CREATED: "Created successfully",

    UPDATED: "Updated successfully",

    DELETED: "Deleted successfully",

    FETCHED: "Fetched successfully",

    UPLOADED: "Uploaded successfully",
  },

  ERROR: {
    NOT_FOUND: "Resource not found",

    UNAUTHORIZED: "Unauthorized access",

    FORBIDDEN: "Forbidden access",

    INVALID_DATA: "Invalid data",

    SERVER_ERROR: "Internal server error",

    ALREADY_EXISTS: "Resource already exists",
  },

  AUTH: {
    LOGIN_SUCCESS: "Login successfully",

    LOGIN_FAILED: "Invalid email or password",

    LOGOUT_SUCCESS: "Logout successfully",

    TOKEN_EXPIRED: "Token expired",

    PASSWORD_CHANGED: "Password changed successfully",
  },
});
