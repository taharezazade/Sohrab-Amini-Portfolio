/** @format */

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/* Select */

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      options = [],
      placeholder = "انتخاب کنید",
      className = "",
      selectClassName = "",
      required = false,
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

        <select
          ref={ref}
          className={twMerge(
            "select select-bordered w-full transition-all duration-200",
            error && "select-error",
            selectClassName,
          )}
          {...props}>
          <option value=''>{placeholder}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

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

Select.displayName = "Select";

export default Select;
