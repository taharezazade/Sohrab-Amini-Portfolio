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

    this.message = message;

    this.errors = errors;

    this.timestamp = new Date().toISOString();

    Error.captureStackTrace?.(this, this.constructor);
  }

  toJSON() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      errors: this.errors,
      timestamp: this.timestamp,
    };
  }
}

export default ApiError;
