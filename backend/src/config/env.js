/** @format */

import dotenv from "dotenv";

dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",

  PORT: Number(process.env.PORT) || 5000,

  DATABASE_URL: process.env.DATABASE_URL,

  CLIENT_URL: process.env.CLIENT_URL,

  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  },

  UPLOAD: {
    MAX_FILE_SIZE: Number(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024,
  },

  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
};

export default Object.freeze(env);
