/** @format */

import * as Iconsax from "iconsax-reactjs";

export const getServiceIcon = (iconName) => {
  if (!iconName || typeof iconName !== "string") {
    return Iconsax.Global;
  }

  const normalizedName = iconName.trim();

  if (!normalizedName) {
    return Iconsax.Global;
  }

  const Icon = Iconsax[normalizedName];

  if (typeof Icon === "function") {
    return Icon;
  }

  return Iconsax.Global;
};