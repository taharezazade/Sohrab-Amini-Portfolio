/** @format */

import { motion } from "framer-motion";
import { Add, Gallery } from "iconsax-reactjs";

const PortfolioHeader = ({ total = 0, onCreate }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    className="card border border-base-300 bg-base-100 shadow-sm"
  >
    <div className="card-body gap-5 p-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Gallery size={30} variant="Bulk" />
        </div>

        <div>
          <h1 className="text-xl font-black md:text-2xl">مدیریت نمونه‌کارها</h1>
          <p className="mt-1 text-sm text-base-content/60">
            ایجاد، ویرایش، انتشار و مدیریت تصاویر پروژه‌ها
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onCreate}
        className="btn btn-primary rounded-xl gap-2"
      >
        <Add size={19} />
        افزودن نمونه‌کار
        <span className="badge badge-primary-content badge-sm">{total}</span>
      </button>
    </div>
  </motion.div>
);

export default PortfolioHeader;
