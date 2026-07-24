/** @format */

import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import env from "./config/env.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.clear();

  console.log("========================================");
  console.log("🚀 Sohrab Amini Portfolio Backend");
  console.log("========================================");
  console.log(`🌍 Environment : ${env.NODE_ENV}`);
  console.log(`📡 Server      : http://localhost:${PORT}`);
  console.log(`🕒 Started At  : ${new Date().toLocaleString()}`);
  console.log("========================================");
});
