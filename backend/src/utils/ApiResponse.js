/** @format */

class ApiResponse {
  constructor(
    statusCodeOrOptions = 200,
    data = null,
    message = "Request completed successfully.",
    meta = null,
  ) {
    /*
     * =========================================================
     * OBJECT STYLE
     *
     * new ApiResponse({
     *   success: true,
     *   statusCode: 200,
     *   message: "...",
     *   data: {...},
     *   meta: null
     * })
     * =========================================================
     */

    if (
      statusCodeOrOptions !== null &&
      typeof statusCodeOrOptions === "object" &&
      !Array.isArray(statusCodeOrOptions)
    ) {
      const {
        success = true,
        statusCode = 200,
        message: objectMessage = "Request completed successfully.",
        data: objectData = null,
        meta: objectMeta = null,
      } = statusCodeOrOptions;

      this.success = success;
      this.statusCode = statusCode;
      this.message = objectMessage;
      this.data = objectData;
      this.meta = objectMeta;
      this.timestamp = new Date().toISOString();

      return;
    }

    /*
     * =========================================================
     * POSITIONAL STYLE
     *
     * new ApiResponse(
     *   200,
     *   data,
     *   "Success message",
     *   meta
     * )
     * =========================================================
     */

    this.success = true;
    this.statusCode = statusCodeOrOptions;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.timestamp = new Date().toISOString();
  }

  /*
   * =========================================================
   * JSON
   * =========================================================
   */

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

  /*
   * =========================================================
   * SUCCESS RESPONSES
   * =========================================================
   */

  static ok(data, message = "Resource fetched successfully.", meta = null) {
    return new ApiResponse({
      success: true,
      statusCode: 200,
      message,
      data,
      meta,
    });
  }

  static created(
    data,
    message = "Resource created successfully.",
    meta = null,
  ) {
    return new ApiResponse({
      success: true,
      statusCode: 201,
      message,
      data,
      meta,
    });
  }

  static updated(
    data,
    message = "Resource updated successfully.",
    meta = null,
  ) {
    return new ApiResponse({
      success: true,
      statusCode: 200,
      message,
      data,
      meta,
    });
  }

  static deleted(message = "Resource deleted successfully.") {
    return new ApiResponse({
      success: true,
      statusCode: 200,
      message,
      data: null,
    });
  }

  static noContent() {
    return new ApiResponse({
      success: true,
      statusCode: 204,
      message: "No content.",
      data: null,
    });
  }
}

export default ApiResponse;
