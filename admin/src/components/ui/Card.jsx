/** @format */

import { twMerge } from "tailwind-merge";

/* Card */

const Card = ({
  title,
  subtitle,
  action,
  children,
  className = "",
  bodyClassName = "",
}) => {
  return (
    <div
      className={twMerge(
        "card border border-base-300 bg-base-100 rounded-3xl shadow-sm",
        className,
      )}>
      {(title || subtitle || action) && (
        <div className='flex items-center justify-between border-b border-base-300 px-6 py-4'>
          <div>
            {title && <h2 className='text-lg font-bold'>{title}</h2>}

            {subtitle && (
              <p className='mt-1 text-sm text-base-content/60'>{subtitle}</p>
            )}
          </div>

          {action}
        </div>
      )}

      <div className={twMerge("card-body p-6", bodyClassName)}>{children}</div>
    </div>
  );
};

export default Card;
