/** @format */

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/* Input */

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      className = "",
      inputClassName = "",
      required = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={twMerge("w-full", className)}>
        {label && (
          <label className='mb-2 flex items-center gap-1 text-sm font-semibold text-base-content'>
            {label}
            {required && <span className='text-error'>*</span>}
          </label>
        )}

        <div className='relative'>
          {startIcon && (
            <div className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50'>
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            className={twMerge(
              "h-14 w-full rounded-2xl border border-base-300 bg-base-100/70 px-5 text-sm outline-none backdrop-blur-md transition-all duration-300",
              "placeholder:text-base-content/35",
              "hover:border-primary/40",
              "focus:border-primary focus:ring-4 focus:ring-primary/15",
              startIcon && "pr-12",
              endIcon && "pl-12",
              error && "border-error focus:border-error focus:ring-error/20",
              inputClassName,
            )}
            {...props}
          />

          {endIcon && (
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50'>
              {endIcon}
            </div>
          )}
        </div>

        {error && (
          <p className='mt-2 text-xs font-medium text-error'>{error}</p>
        )}

        {!error && helperText && (
          <p className='mt-2 text-xs text-base-content/50'>{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
