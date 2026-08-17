/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { CloseCircle, Danger, Trash } from "iconsax-reactjs";

const PortfolioDeleteModal = ({
  open = false,
  portfolio = null,
  onClose,
  onConfirm,
  loading = false,
}) => (
  <AnimatePresence>
    {open && (
      <div className="fixed inset-0 z-[120]" dir="rtl">
        <motion.button
          type="button"
          aria-label="بستن"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={loading ? undefined : onClose}
          className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-base-100 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-base-200 px-5 py-4">
            <h2 className="font-black">حذف نمونه‌کار</h2>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="btn btn-ghost btn-square btn-sm"
            >
              <CloseCircle size={22} />
            </button>
          </div>

          <div className="space-y-5 p-5">
            <div className="flex items-center gap-4 rounded-2xl bg-error/10 p-4 text-error">
              <Danger size={32} variant="Bulk" />
              <p className="text-sm leading-6">
                این عملیات قابل بازگشت نیست و اطلاعات نمونه‌کار حذف خواهد شد.
              </p>
            </div>

            <p className="text-sm leading-7">
              آیا از حذف <strong>{portfolio?.title || "این نمونه‌کار"}</strong>{" "}
              مطمئن هستید؟
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="btn btn-ghost rounded-xl"
              >
                انصراف
              </button>

              <button
                type="button"
                onClick={onConfirm}
                disabled={loading}
                className="btn btn-error rounded-xl gap-2"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <Trash size={17} />
                )}
                حذف نمونه‌کار
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default PortfolioDeleteModal;
