/** @format */

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

import routes from "./routes/index.js";

import env from "./config/env.js";
import corsOptions from "./config/cors.js";

import rateLimiter from "./middlewares/rateLimiter.middleware.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

/**
 * =========================================================
 * SECURITY
 * =========================================================
 */

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);

/**
 * =========================================================
 * CORS
 * =========================================================
 */

app.use(corsOptions);

/**
 * =========================================================
 * RATE LIMITER
 * =========================================================
 */

app.use(rateLimiter);

/**
 * =========================================================
 * BODY PARSERS
 * =========================================================
 */

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  }),
);

/**
 * =========================================================
 * COOKIE PARSER
 * =========================================================
 */

app.use(cookieParser());

/**
 * =========================================================
 * STATIC UPLOADS
 * =========================================================
 *
 * Physical directory:
 *
 * backend/uploads/
 *
 * Public URL:
 *
 * http://localhost:5000/uploads/...
 */

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

/**
 * =========================================================
 * LOGGER
 * =========================================================
 */

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/**
 * =========================================================
 * HEALTH CHECK
 * =========================================================
 */

app.get("/api", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Sohrab Amini Portfolio API is running 🚀",
    version: "1.0.0",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

/**
 * =========================================================
 * API ROUTES
 * =========================================================
 */

app.use("/api", routes);

/**
 * =========================================================
 * 404
 * =========================================================
 */

app.use(notFoundMiddleware);

/**
 * =========================================================
 * ERROR HANDLER
 * =========================================================
 */

app.use(errorMiddleware);

export default app;
