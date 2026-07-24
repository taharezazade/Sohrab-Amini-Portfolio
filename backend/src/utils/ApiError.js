/** @format */

class ApiError extends Error {
  constructor({
    statusCode = 500,
    message = "Internal Server Error.",
    errors = [],
  } = {}) {
    super(message);

    this.name = "ApiError";
    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;
    this.timestamp = new Date().toISOString();

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
