/** @format */

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";

import env from "./config/env.js";
import corsOptions from "./config/cors.js";

import rateLimiter from "./middlewares/rateLimiter.middleware.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

import portfolioRoutes from "./routes/portfolio.routes.js";
import portfolioImageRoutes from "./routes/portfolio-image.routes.js";

const app = express();
/* ================================= Security ================================= */

app.use(helmet());

/* ================================= CORS ================================= */

app.use(corsOptions);

/* ================================= Rate Limiter ================================= */

app.use(rateLimiter);

/* ================================= Body Parsers ================================= */

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  }),
);

app.use(cookieParser());

/* ================================= Logger ================================= */

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* ================================= Health Check ================================= */

app.get("/api", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Sohrab Amini Portfolio API is running 🚀",
    version: "1.0.0",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

/* ================================= API Routes ================================= */

app.use("/api", routes);

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/portfolio", portfolioImageRoutes);

/* ================================= 404 ================================= */

app.use(notFoundMiddleware);

/* ================================= Error ================================= */

app.use(errorMiddleware);

export default app;
