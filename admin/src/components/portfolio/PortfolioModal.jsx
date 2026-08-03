/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { CloseCircle } from "iconsax-reactjs";

import PortfolioForm from "./PortfolioForm";

const PortfolioModal = ({
  open = false,

  portfolio = null,

  loading = false,

  onClose,

  onSubmit,
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
              y: 30,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}

            transition={{
              duration: 0.25,
            }}

            className='
                fixed

                left-1/2
                top-1/2

                z-50

                flex

                h-[90vh]

                w-[calc(100%-2rem)]

                max-w-3xl

                -translate-x-1/2
                -translate-y-1/2

                flex-col

                overflow-hidden

                rounded-3xl

                bg-base-100

                shadow-xl
              '>
            {/* Header */}

            <div
              className='
                  border-base-300

                  flex

                  items-center

                  justify-between

                  border-b

                  px-6

                  py-4
                '>
              <div>
                <h2
                  className='
                      text-lg
                      font-black
                    '>
                  {portfolio?.id ? "ویرایش نمونه‌کار" : "افزودن نمونه‌کار"}
                </h2>

                <p
                  className='
                      text-base-content/60

                      mt-1

                      text-sm
                    '>
                  اطلاعات پروژه را وارد کنید.
                </p>
              </div>

              <button
                type='button'

                onClick={onClose}

                className='
                    btn
                    btn-ghost

                    btn-sm

                    btn-square
                  '>
                <CloseCircle size={22} />
              </button>
            </div>

            {/* Body */}

            <div
              className='
                  flex-1

                  overflow-y-auto

                  p-6
                '>
              <PortfolioForm
                initialValues={portfolio}

                loading={loading}

                onSubmit={onSubmit}

                onCancel={onClose}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
