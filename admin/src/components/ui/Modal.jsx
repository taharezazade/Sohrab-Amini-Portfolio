/** @format */

import { twMerge } from "tailwind-merge";

/* Modal */

const Modal = ({
  open = false,
  title,
  children,
  footer,
  onClose,
  size = "max-w-2xl",
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
    <dialog open className='modal modal-open' onClick={handleBackdrop}>
      <div
        className={twMerge("modal-box w-11/12 rounded-2xl", size, className)}>
        <div className='mb-6 flex items-center justify-between'>
          <h3 className='text-lg font-bold'>{title}</h3>

          <button
            type='button'
            className='btn btn-circle btn-ghost btn-sm'
            onClick={onClose}>
            ✕
          </button>
        </div>

        <div>{children}</div>

        {footer && <div className='modal-action mt-8'>{footer}</div>}
      </div>
    </dialog>
  );
};

export default Modal;
