/** @format */

import { twMerge } from "tailwind-merge";

/* Skeleton */

const Skeleton = ({
  className = "",
  width = "w-full",
  height = "h-5",
  rounded = "rounded-lg",
}) => {
  return (
    <div
      className={twMerge(
        "animate-pulse bg-base-300",
        width,
        height,
        rounded,
        className,
      )}
    />
  );
};

export default Skeleton;
