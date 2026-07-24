/** @format */

import multer from "multer";

import env from "../config/env.js";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: env.UPLOAD.MAX_FILE_SIZE,
  },
});

export default upload;
