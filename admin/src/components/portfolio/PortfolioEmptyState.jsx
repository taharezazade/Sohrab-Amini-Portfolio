/** @format */

import { motion } from "framer-motion";
import { Add, SearchNormal1 } from "iconsax-reactjs";

const PortfolioEmptyState = ({
  onCreate,
  searchMode = false,
  actionText = "افزودن نمونه‌کار",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="card border border-dashed border-base-300 bg-base-100"
  >
    <div className="card-body items-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-base-200 text-base-content/40">
        <SearchNormal1 size={30} />
      </div>

      <h3 className="mt-4 text-lg font-black">
        {searchMode ? "نمونه‌کاری پیدا نشد" : "هنوز نمونه‌کاری ثبت نشده است"}
      </h3>

      <p className="max-w-md text-sm leading-6 text-base-content/55">
        {searchMode
          ? "فیلترها یا عبارت جستجو را تغییر دهید و دوباره تلاش کنید."
          : "اولین پروژه را ایجاد کنید تا در داشبورد و سایت نمایش داده شود."}
      </p>

      {!searchMode && (
        <button
          type="button"
          onClick={onCreate}
          className="btn btn-primary mt-4 rounded-xl gap-2"
        >
          <Add size={18} />
          {actionText}
        </button>
      )}
    </div>
  </motion.div>
);

export default PortfolioEmptyState;
