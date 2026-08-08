/** @format */

export function truncate(text, length = 50) {
  if (!text) return "";

  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
}
