/** @format */

class ApiError extends Error {
  constructor(statusCode = 500, message = "خطای داخلی سرور.", errors = []) {
    super(message);

    this.name = "ApiError";

    this.success = false;

    this.statusCode = Number.isInteger(statusCode) ? statusCode : 500;

    this.message = message;

    this.errors = errors;

    this.timestamp = new Date().toISOString();

    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      success: false,

      statusCode: this.statusCode,

      message: this.message,

      errors: this.errors,

      timestamp: this.timestamp,
    };
  }
}

export default ApiError;
