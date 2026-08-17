/** @format */

import { motion } from "framer-motion";
import {
  Add,
  Filter,
  Refresh2,
  SearchNormal1,
  Sort,
  Star1,
} from "iconsax-reactjs";

const PortfolioToolbar = ({
  search = "",
  setSearch,
  status = "all",
  setStatus,
  featured = "all",
  setFeatured,
  sort = "newest",
  setSort,
  onRefresh,
  onCreate,
  loading = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="card border border-base-300 bg-base-100 shadow-sm"
  >
    <div className="card-body gap-4 p-4">
      <div className="flex flex-col gap-3 xl:flex-row">
        <label className="input input-bordered flex flex-1 items-center gap-2 bg-base-100">
          <SearchNormal1 size={18} className="opacity-50" />
          <input
            value={search}
            onChange={(e) => setSearch?.(e.target.value)}
            placeholder="جستجوی عنوان، دسته‌بندی، مشتری..."
            className="grow"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <select
            value={status}
            onChange={(e) => setStatus?.(e.target.value)}
            className="select select-bordered min-w-36"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="PUBLISHED">منتشر شده</option>
            <option value="DRAFT">پیش‌نویس</option>
            <option value="ARCHIVED">آرشیو</option>
          </select>

          <select
            value={featured}
            onChange={(e) => setFeatured?.(e.target.value)}
            className="select select-bordered min-w-32"
          >
            <option value="all">همه پروژه‌ها</option>
            <option value="true">ویژه</option>
            <option value="false">عادی</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort?.(e.target.value)}
            className="select select-bordered min-w-32"
          >
            <option value="newest">جدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
            <option value="title">عنوان</option>
            <option value="order">ترتیب</option>
          </select>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="btn btn-square btn-ghost"
            title="به‌روزرسانی"
          >
            <Refresh2 size={19} className={loading ? "animate-spin" : ""} />
          </button>

          <button
            type="button"
            onClick={onCreate}
            className="btn btn-primary gap-2 rounded-xl"
          >
            <Add size={18} />
            افزودن
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-base-content/50">
        <Filter size={15} />
        <span>فیلتر و مرتب‌سازی بدون خروج از صفحه مدیریت.</span>
      </div>
    </div>
  </motion.div>
);

export default PortfolioToolbar;
