/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { Danger, Trash } from "iconsax-reactjs";

const ServiceDeleteModal = ({
  open = false,
  service = null,
  loading = false,
  onClose,
  onConfirm,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <div className='fixed inset-0 z-50 flex items-center justify-center px-4'>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='bg-base-content/40 absolute inset-0 backdrop-blur-sm'
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{ duration: 0.2 }}
            className='card bg-base-100 relative z-10 w-full max-w-md border shadow-xl'>
            <div className='card-body text-center'>
              <div className='bg-error/10 text-error mx-auto flex h-20 w-20 items-center justify-center rounded-full'>
                <Danger size={42} variant='Bold' />
              </div>

              <h3 className='mt-5 text-xl font-black'>حذف سرویس</h3>

              <p className='text-base-content/60 mt-3 leading-7'>
                آیا مطمئن هستید که می‌خواهید سرویس
                <span className='text-base-content mx-1 font-bold'>
                  {service?.title || ""}
                </span>
                را حذف کنید؟
                <br />
                این عملیات قابل بازگشت نیست.
              </p>

              <div className='mt-8 flex justify-center gap-3'>
                <button
                  type='button'
                  className='btn btn-ghost'
                  onClick={onClose}
                  disabled={loading}>
                  انصراف
                </button>

                <button
                  type='button'
                  className='btn btn-error'
                  onClick={() => onConfirm?.(service)}
                  disabled={loading}>
                  {loading ?
                    <span className='loading loading-spinner loading-sm' />
                  : <>
                      <Trash size={18} />
                      حذف سرویس
                    </>
                  }
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDeleteModal;
