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
}) => (
  <AnimatePresence>
    {open && (
      <div className="fixed inset-0 z-[100]">
        <motion.button
          type="button"
          aria-label="بستن"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={loading ? undefined : onClose}
          className="absolute inset-0 h-full w-full cursor-default bg-black/50 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          className="absolute left-1/2 top-1/2 flex h-[min(92vh,900px)] w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-2xl"
          dir="rtl"
        >
          <header className="flex shrink-0 items-center justify-between border-b border-base-200 px-5 py-4 md:px-6">
            <div>
              <h2 className="text-lg font-black md:text-xl">
                {portfolio?.id ? "ویرایش نمونه‌کار" : "افزودن نمونه‌کار"}
              </h2>
              <p className="mt-1 text-xs text-base-content/50">
                اطلاعات پروژه و تصویر اصلی را ثبت کنید.
              </p>
            </div>

            <button
              type="button"
              onClick={loading ? undefined : onClose}
              disabled={loading}
              className="btn btn-ghost btn-square btn-sm"
            >
              <CloseCircle size={23} />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
            <PortfolioForm
              initialValues={portfolio}
              loading={loading}
              onSubmit={onSubmit}
              onCancel={onClose}
            />
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default PortfolioModal;
