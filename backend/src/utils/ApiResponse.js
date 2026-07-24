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
}

export default ApiResponse;
