/** @format */

import { twMerge } from "tailwind-merge";
import { CloseCircle } from "iconsax-reactjs";

/* Drawer */

const Drawer = ({
  open = false,
  title,
  children,
  footer,
  onClose,
  position = "left",
  width = "w-[420px]",
  closeOnBackdrop = true,
  className = "",
}) => {
  if (!open) return null;

  const handleBackdrop = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm'
      onClick={handleBackdrop}>
      <div
        className={twMerge(
          "absolute top-0 h-full bg-base-100 shadow-2xl transition-all duration-300 flex flex-col",
          width,
          position === "left" ? "left-0" : "right-0",
          className,
        )}>
        <div className='flex items-center justify-between border-b border-base-300 p-5'>
          <h2 className='text-lg font-bold'>{title}</h2>

          <button
            type='button'
            className='btn btn-ghost btn-circle btn-sm'
            onClick={onClose}>
            <CloseCircle size={22} />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto p-5'>{children}</div>

        {footer && <div className='border-t border-base-300 p-5'>{footer}</div>}
      </div>
    </div>
  );
};

export default Drawer;
