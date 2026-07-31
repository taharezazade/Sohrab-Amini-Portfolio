/** @format */

import { FolderOpen } from "iconsax-reactjs";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

/* Empty State */

const EmptyState = ({
  icon,
  title = "اطلاعاتی وجود ندارد.",
  description = "هنوز موردی برای نمایش ثبت نشده است.",
  action,
  actionText,
  className = "",
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center",
        className,
      )}>
      <div className='mb-5 rounded-full bg-base-200 p-5'>
        {icon ?? (
          <FolderOpen
            size={48}
            variant='Bulk'
            className='text-base-content/60'
          />
        )}
      </div>

      <h2 className='text-xl font-bold'>{title}</h2>

      <p className='mt-2 max-w-md text-base-content/60'>{description}</p>

      {action && actionText && (
        <Button className='mt-6' onClick={action}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
