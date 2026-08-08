/** @format */

import fs from "fs/promises";
import path from "path";

/**
 * Check if file exists
 */
export async function fileExists(filePath) {
  try {
    await fs.access(filePath);

    return true;
  } catch {
    return false;
  }
}

/**
 * Delete file safely
 */
export async function deleteFile(filePath) {
  try {
    const exists = await fileExists(filePath);

    if (!exists) {
      return false;
    }

    await fs.unlink(filePath);

    return true;
  } catch (error) {
    console.error("خطای حذف فایل:", error.message);

    return false;
  }
}

/**
 * Create directory if not exists
 */
export async function ensureDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, {
      recursive: true,
    });

    return true;
  } catch (error) {
    console.error("خطای ایجاد دایرکتوری:", error.message);

    return false;
  }
}

/**
 * Get upload directory path
 */
export function getUploadPath(folder = "") {
  return path.join(process.cwd(), "uploads", folder);
}

/**
 * Get public file URL
 */
export function getFileUrl(filePath) {
  if (!filePath) {
    return null;
  }

  return `/uploads/${filePath.replaceAll("\\", "/").replace("uploads/", "")}`;
}

/**
 * Get filename from path
 */
export function getFileName(filePath) {
  if (!filePath) {
    return null;
  }

  return path.basename(filePath);
}

/**
 * Get file extension
 */
export function getFileExtension(filename) {
  if (!filename) {
    return null;
  }

  return path.extname(filename).toLowerCase();
}

/**
 * Build upload file path
 */
export function buildFilePath(folder, filename) {
  return path.join(getUploadPath(folder), filename);
}

/**
 * Remove multiple files
 */
export async function deleteFiles(files = []) {
  const results = await Promise.all(files.map((file) => deleteFile(file)));

  return results;
}
