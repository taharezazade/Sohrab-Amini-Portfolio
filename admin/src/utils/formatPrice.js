/** @format */

export function formatPrice(price) {
  if (!price) return "0";

  return Number(price).toLocaleString("fa-IR");
}
