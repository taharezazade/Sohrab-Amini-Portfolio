/** @format */

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import routes from "./routes/index.js";

import env from "./config/env.js";
import corsOptions from "./config/cors.js";

import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

/* =========================================================
   APP
========================================================= */

const app = express();

/* =========================================================
   TRUST PROXY
========================================================= */

if (env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

/* =========================================================
   SECURITY
========================================================= */

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },

    crossOriginOpenerPolicy: {
      policy: "same-origin-allow-popups",
    },

    crossOriginEmbedderPolicy: false,
  }),
);

/* =========================================================
   CORS
========================================================= */

app.use(corsOptions);

/* =========================================================
   BODY PARSERS
========================================================= */

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

/* =========================================================
   COOKIE PARSER
========================================================= */

app.use(cookieParser());

/* =========================================================
   STATIC UPLOADS
========================================================= */

const uploadsPath = path.resolve(process.cwd(), "uploads");

app.use(
  "/uploads",
  express.static(uploadsPath, {
    fallthrough: true,

    etag: true,

    maxAge: env.NODE_ENV === "production" ? "7d" : 0,

    setHeaders: (res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");

      res.setHeader(
        "Cache-Control",
        env.NODE_ENV === "production" ?
          "public, max-age=604800, immutable"
        : "public, max-age=0, must-revalidate",
      );
    },
  }),
);

/* =========================================================
   DEVELOPMENT UPLOAD LOG
========================================================= */

if (env.NODE_ENV === "development") {
  console.log("==============================================");
  console.log("UPLOAD DIRECTORY");
  console.log("==============================================");
  console.log(`Physical path: ${uploadsPath}`);
  console.log(`Public URL: http://localhost:${env.PORT || 5000}/uploads`);
  console.log("==============================================");
}

/* =========================================================
   LOGGER
========================================================= */

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/api", (req, res) => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Sohrab Amini Portfolio API is running.",
    version: "1.0.0",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

/* =========================================================
   UPLOAD HEALTH CHECK
========================================================= */

app.get("/api/upload/health", (req, res) => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Upload system is available.",
    data: {
      uploadDirectory: uploadsPath,
      publicPath: "/uploads",
    },
    timestamp: new Date().toISOString(),
  });
});

/* =========================================================
   API ROUTES
========================================================= */

app.use("/api", routes);

/* =========================================================
   NOT FOUND
========================================================= */

app.use(notFoundMiddleware);

/* =========================================================
   GLOBAL ERROR HANDLER
========================================================= */

app.use(errorMiddleware);

/* =========================================================
   EXPORT
========================================================= */

export default app;
