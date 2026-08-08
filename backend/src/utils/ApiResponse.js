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

  /* =========================================
      Static Helpers
  ========================================= */

  static ok(data, message = "Resource fetched successfully.") {
    return new ApiResponse({
      statusCode: 200,
      message,
      data,
    });
  }

  static created(data, message = "Resource created successfully.") {
    return new ApiResponse({
      statusCode: 201,
      message,
      data,
    });
  }

  static updated(data, message = "Resource updated successfully.") {
    return new ApiResponse({
      statusCode: 200,
      message,
      data,
    });
  }

  static deleted(message = "Resource deleted successfully.") {
    return new ApiResponse({
      statusCode: 200,
      message,
      data: null,
    });
  }

  static noContent() {
    return new ApiResponse({
      statusCode: 204,
      message: "No content.",
      data: null,
    });
  }
}

export default ApiResponse;
