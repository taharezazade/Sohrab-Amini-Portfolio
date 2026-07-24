/** @format */

import ApiError from "../utils/ApiError.js";

const notFoundMiddleware = (req, res, next) => {
  next(
    new ApiError({
      statusCode: 404,
      message: `Route '${req.originalUrl}' not found.`,
    }),
  );
};

export default notFoundMiddleware;
