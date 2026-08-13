/** @format */

import cors from "cors";

/* =========================================================
   Allowed Frontend Origins
========================================================= */

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

/* =========================================================
   CORS Configuration
========================================================= */

const corsOptions = cors({
  origin(origin, callback) {
    /*
     * Allow requests without Origin.
     *
     * Bruno / Postman / curl / server-to-server
     * requests normally do not send an Origin header.
     */
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("========================================");
    console.error("❌ CORS BLOCKED");
    console.error("Origin:", origin);
    console.error("Allowed Origins:", allowedOrigins);
    console.error("========================================");

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],

  exposedHeaders: ["Authorization"],

  optionsSuccessStatus: 204,
});

export default corsOptions;
