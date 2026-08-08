/** @format */

export function slugify(text) {
  if (!text) return "";

  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
