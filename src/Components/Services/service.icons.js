/** @format */

import {
  Code,
  ProgrammingArrow,
  Flash,
  ShieldSecurity,
  Driver2,
  Setting4,
  Cpu,
  Setting2,
} from "iconsax-reactjs";

/**
 * =========================================================
 * Service Icons
 * =========================================================
 *
 * Maps API icon names to Iconsax React components.
 */

const SERVICE_ICONS = {
  Code,
  ProgrammingArrow,
  Flash,
  ShieldSecurity,
  Driver2,
  Setting4,
  Cpu,

  // Fallback / optional icons
  Setting2,
};

/**
 * =========================================================
 * Get Service Icon
 * =========================================================
 *
 * @param {string} iconName
 * @returns {React.Component}
 */

export function getServiceIcon(iconName) {
  if (!iconName || typeof iconName !== "string") {
    return Setting2;
  }

  return SERVICE_ICONS[iconName] || Setting2;
}

export default SERVICE_ICONS;
