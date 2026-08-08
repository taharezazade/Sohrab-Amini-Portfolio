/** @format */

export function formatFileSize(bytes) {
  if (!bytes) return "0 KB";

  const units = ["Bytes", "KB", "MB", "GB"];

  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(3)} ${units[index]}`;
}
