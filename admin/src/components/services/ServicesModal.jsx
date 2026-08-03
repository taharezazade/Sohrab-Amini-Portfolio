/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { CloseCircle } from "iconsax-reactjs";

const ServicesModal = ({ open, onClose, title = "افزودن سرویس", children }) => {
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
            className='bg-black/40 absolute inset-0 backdrop-blur-sm'
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
            }}
            className='
              bg-base-100
              relative
              z-10
              flex
              max-h-[90vh]
              w-full
              max-w-2xl
              flex-col
              overflow-hidden
              rounded-3xl
              shadow-xl
            '>
            {/* Header */}
            <div className='border-base-300 flex items-center justify-between border-b px-6 py-5'>
              <h2 className='text-xl font-black'>{title}</h2>

              <button onClick={onClose} className='btn btn-ghost btn-circle'>
                <CloseCircle size={26} />
              </button>
            </div>

            {/* Body */}
            <div className='overflow-y-auto p-6'>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServicesModal;
