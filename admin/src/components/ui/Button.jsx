/** @format */

import { twMerge } from "tailwind-merge";

/* Button */

const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={twMerge(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl",
        "bg-primary text-primary-content",
        "p-3 font-semibold",
        "shadow-md shadow-primary/20",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30",
        "active:translate-y-0",
        "focus:outline-none focus:ring-4 focus:ring-primary/20",
        "disabled:pointer-events-none disabled:opacity-60",
        fullWidth && "w-full",
        className,
      )}
      {...props}>
      <span className='absolute inset-0 bg-gradient-to-t from-black/10 to-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100' />

      {loading ?
        <>
          <span className='loading loading-spinner skeleton skeleton-text loading-sm' />
          <span className='skeleton skeleton-text'>در حال پردازش...</span>
        </>
      : <>
          {startIcon}
          <span>{children}</span>
          {endIcon}
        </>
      }
    </button>
  );
};

export default Button;
