/** @format */

export function validateImage(file, options = {}) {
  const {
    maxSize = 2 * 1024 * 1024,
    types = ["image/jpeg", "image/png", "image/webp"],
  } = options;

  if (!types.includes(file.type)) {
    return "فرمت تصویر مجاز نیست.";
  }

  if (file.size > maxSize) {
    return "حجم تصویر بیش از حد مجاز است.";
  }

  return null;
}
