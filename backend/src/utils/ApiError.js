/** @format */

/**
 * =========================================================
 * ApiError
 * =========================================================
 *
 * Standard application error used across the backend.
 *
 * Usage:
 *
 * throw new ApiError(404, "Portfolio not found");
 *
 * =========================================================
 */

class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Internal Server Error",
    errors = null,
  ) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };
export default ApiError;
