/** @format */

class ApiResponse {
  constructor({
    success = true,
    statusCode = 200,
    message = "Request completed successfully.",
    data = null,
    meta = null,
  } = {}) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.timestamp = new Date().toISOString();
  }

  toJSON() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
      meta: this.meta,
      timestamp: this.timestamp,
    };
  }
}

export default ApiResponse;
