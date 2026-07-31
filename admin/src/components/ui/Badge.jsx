/** @format */

import { twMerge } from "tailwind-merge";

/* Badge */

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  soft = false,
  className = "",
}) => {
  return (
    <span
      className={twMerge(
        "badge",
        `badge-${variant}`,
        size !== "md" && `badge-${size}`,
        outline && "badge-outline",
        soft && "badge-soft",
        className,
      )}>
      {children}
    </span>
  );
};

export default Badge;
