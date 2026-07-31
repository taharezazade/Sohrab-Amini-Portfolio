/** @format */

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/* Switch */

const Switch = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className = "",
      switchClassName = "",
      required = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={twMerge("form-control w-full", className)}>
        <label className='label cursor-pointer justify-between rounded-lg border border-base-300 px-4 py-3'>
          <div>
            {label && (
              <span className='label-text font-medium'>
                {label}
                {required && <span className='mr-1 text-error'>*</span>}
              </span>
            )}

            {!error && helperText && (
              <p className='mt-1 text-sm text-base-content/60'>{helperText}</p>
            )}

            {error && <p className='mt-1 text-sm text-error'>{error}</p>}
          </div>

          <input
            ref={ref}
            type='checkbox'
            className={twMerge("toggle toggle-primary", switchClassName)}
            {...props}
          />
        </label>
      </div>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
