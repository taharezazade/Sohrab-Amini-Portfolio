/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { Trash, CloseCircle, Danger } from "iconsax-reactjs";

const PortfolioDeleteModal = ({
  open = false,

  portfolio = null,

  onClose,

  onConfirm,

  loading = false,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={onClose}

            className='
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
              '
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              scale: 0.95,
            }}

            transition={{
              duration: 0.2,
            }}

            className='
                fixed
                left-1/2
                top-1/2
                z-50

                w-[calc(100%-2rem)]

                max-w-md

                -translate-x-1/2
                -translate-y-1/2

                rounded-3xl

                bg-base-100

                shadow-xl
              '>
            <div
              className='
                  p-6
                '>
              {/* Icon */}

              <div
                className='
                    bg-error/10
                    text-error

                    mx-auto

                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl
                  '>
                <Danger size={34} variant='Bulk' />
              </div>

              {/* Content */}

              <div
                className='
                    mt-5
                    text-center
                  '>
                <h3
                  className='
                      text-lg
                      font-black
                    '>
                  حذف نمونه‌کار
                </h3>

                <p
                  className='
                      text-base-content/60
                      mt-3
                      text-sm
                      leading-6
                    '>
                  آیا مطمئن هستید که می‌خواهید
                  <span
                    className='
                        mx-1
                        font-bold
                        text-base-content
                      '>
                    {portfolio?.title}
                  </span>
                  را حذف کنید؟
                  <br />
                  این عملیات قابل بازگشت نیست.
                </p>
              </div>

              {/* Actions */}

              <div
                className='
                    mt-6

                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                    sm:justify-center
                  '>
                <button
                  type='button'

                  onClick={onClose}

                  disabled={loading}

                  className='
                      btn
                      btn-ghost

                      rounded-xl
                    '>
                  <CloseCircle size={18} />
                  انصراف
                </button>

                <button
                  type='button'

                  onClick={() => onConfirm?.(portfolio)}

                  disabled={loading}

                  className='
                      btn
                      btn-error

                      rounded-xl

                      gap-2
                    '>
                  {loading ?
                    <span
                      className='
                          loading
                          loading-spinner
                          loading-sm
                        '
                    />
                  : <Trash size={18} />}
                  حذف نمونه‌کار
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioDeleteModal;
