/** @format */

import sharp from "sharp";
import path from "path";
import crypto from "crypto";

import { ensureDirectory, getUploadPath, deleteFile } from "../utils/file.js";

class ImageService {
  /**
   * Generate unique filename
   */
  generateFileName(extension = "webp") {
    const id = crypto.randomBytes(16).toString("hex");

    return `${id}.${extension}`;
  }

  /**
   * Process uploaded image
   *
   * input:
   * multer file object
   *
   * output:
   * saved image path
   */
  async processImage(file, folder = "images") {
    if (!file) {
      throw new Error("فایل تصویر الزامی است.");
    }

    const uploadDir = getUploadPath(folder);

    await ensureDirectory(uploadDir);

    const filename = this.generateFileName("webp");

    const outputPath = path.join(uploadDir, filename);

    await sharp(file.path)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
      })
      .toFile(outputPath);

    // remove original uploaded file
    await deleteFile(file.path);

    return path.join(folder, filename).replaceAll("\\", "/");
  }

  /**
   * Delete image
   */
  async removeImage(imagePath) {
    if (!imagePath) {
      return false;
    }

    const fullPath = path.join(process.cwd(), "uploads", imagePath);

    return await deleteFile(fullPath);
  }

  /**
   * Validate image type
   */
  validateMimeType(mimetype) {
    const allowed = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/heic",
      "image/heif",
    ];

    return allowed.includes(mimetype);
  }

  /**
   * Get image metadata
   */
  async getMetadata(filePath) {
    return await sharp(filePath).metadata();
  }
}

export default new ImageService();
