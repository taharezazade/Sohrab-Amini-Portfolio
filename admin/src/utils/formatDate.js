/** @format */

export function formatDate(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
