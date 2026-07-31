/** @format */

import { twMerge } from "tailwind-merge";

/* Loading */

const Loading = ({
  text = "در حال بارگذاری...",
  fullScreen = false,
  size = "loading-lg",
  className = "",
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center gap-4",
        fullScreen && "min-h-screen",
        className,
      )}>
      <span className={twMerge("loading loading-spinner", size)} />

      {text && <p className='text-sm text-base-content/70'>{text}</p>}
    </div>
  );
};

export default Loading;
