/** @format */

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/* Textarea */

const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className = "",
      textareaClassName = "",
      required = false,
      rows = 5,
      resize = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={twMerge("form-control w-full", className)}>
        {label && (
          <label className='label'>
            <span className='label-text font-medium'>
              {label}
              {required && <span className='mr-1 text-error'>*</span>}
            </span>
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          className={twMerge(
            "textarea textarea-bordered w-full transition-all duration-200",
            !resize && "resize-none",
            error && "textarea-error",
            textareaClassName,
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";

export default Textarea;
