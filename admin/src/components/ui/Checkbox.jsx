/** @format */

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/* Checkbox */

const Checkbox = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className = "",
      checkboxClassName = "",
      required = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={twMerge("form-control w-full", className)}>
        <label className='label cursor-pointer justify-start gap-3'>
          <input
            ref={ref}
            type='checkbox'
            className={twMerge(
              "checkbox checkbox-primary",
              error && "checkbox-error",
              checkboxClassName,
            )}
            {...props}
          />

          {label && (
            <span className='label-text'>
              {label}
              {required && <span className='mr-1 text-error'>*</span>}
            </span>
          )}
        </label>

        {error ?
          <label className='label'>
            <span className='label-text-alt text-error'>{error}</span>
          </label>
        : helperText && (
            <label className='label'>
              <span className='label-text-alt'>{helperText}</span>
            </label>
          )
        }
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
