/** @format */

import ApiError from "../utils/ApiError.js";

const notFoundMiddleware = (req, res, next) => {
  const message = `Route '${req.method} ${req.originalUrl}' not found.`;

  return next(
    new ApiError({
      statusCode: 404,
      message,
    }),
  );
};

export default notFoundMiddleware;
