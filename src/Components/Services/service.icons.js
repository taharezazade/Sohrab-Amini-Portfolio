/** @format */

import * as Iconsax from "iconsax-reactjs";

/* =========================================================
   ICON MAP
========================================================= */

const iconMap = new Map();

Object.entries(Iconsax).forEach(([name, component]) => {
  if (typeof component === "function" || typeof component === "object") {
    iconMap.set(name.toLowerCase(), component);
  }
});

/* =========================================================
   NORMALIZE
========================================================= */

function normalizeIconName(value) {
  return String(value || "")
    .trim()
    .replace(/[\s_-]+/g, "")
    .toLowerCase();
}

/* =========================================================
   GET ICON
========================================================= */

export function getServiceIcon(iconName) {
  const normalized = normalizeIconName(iconName);

  if (!normalized) {
    return Iconsax.Global;
  }

  return iconMap.get(normalized) || Iconsax.Global;
}

/* =========================================================
   CHECK ICON
========================================================= */

export function hasServiceIcon(iconName) {
  const normalized = normalizeIconName(iconName);

  return iconMap.has(normalized);
}

export default getServiceIcon;
