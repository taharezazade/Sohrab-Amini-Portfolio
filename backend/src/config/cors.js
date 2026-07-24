/** @format */

import cors from "cors";
import env from "./env.js";

const corsOptions = cors({
  origin: env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

export default corsOptions;
