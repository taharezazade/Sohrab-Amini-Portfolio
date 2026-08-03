/** @format */

import { motion } from "framer-motion";
import {
  Add,
  Refresh2,
  SearchNormal1,
  Filter,
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
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      className='
        card
        bg-base-100
        border-base-300
        border
        shadow-sm
      '>
      <div
        className='
          card-body
          gap-5
        '>
        <div
          className='
            flex
            flex-col
            gap-4

            xl:flex-row
            xl:items-center
            xl:justify-between
          '>
          {/* Search */}

          <div
            className='
              border-base-300
              focus-within:border-primary

              flex
              h-12
              w-full
              items-center
              gap-3
              rounded-xl
              border
              px-4

              transition

              xl:max-w-md
            '>
            <SearchNormal1
              size={20}

              className='
                text-base-content/50
              '
            />

            <input
              type='text'

              value={search}

              onChange={(e) => setSearch(e.target.value)}

              placeholder='
                جستجوی نمونه‌کار...
              '

              className='
                w-full
                bg-transparent
                outline-none
              '
            />
          </div>

          {/* Filters */}

          <div
            className='
              flex
              flex-wrap
              gap-3
            '>
            {/* Status */}

            <div className='relative'>
              <Filter
                size={16}

                className='
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-base-content/50
                '
              />

              <select
                value={status}

                onChange={(e) => setStatus(e.target.value)}

                className='
                  select
                  select-bordered
                  h-12
                  rounded-xl
                  pr-9
                '>
                <option value='all'>همه وضعیت‌ها</option>

                <option value='PUBLISHED'>منتشر شده</option>

                <option value='DRAFT'>پیش‌نویس</option>

                <option value='ARCHIVED'>آرشیو شده</option>
              </select>
            </div>

            {/* Featured */}

            <div className='relative'>
              <Star1
                size={16}

                className='
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-base-content/50
                '
              />

              <select
                value={featured}

                onChange={(e) => setFeatured(e.target.value)}

                className='
                  select
                  select-bordered
                  h-12
                  rounded-xl
                  pr-9
                '>
                <option value='all'>همه پروژه‌ها</option>

                <option value='true'>پروژه‌های ویژه</option>

                <option value='false'>عادی</option>
              </select>
            </div>

            {/* Sort */}

            <div className='relative'>
              <Sort
                size={16}

                className='
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-base-content/50
                '
              />

              <select
                value={sort}

                onChange={(e) => setSort(e.target.value)}

                className='
                  select
                  select-bordered
                  h-12
                  rounded-xl
                  pr-9
                '>
                <option value='newest'>جدیدترین</option>

                <option value='oldest'>قدیمی‌ترین</option>

                <option value='title'>عنوان</option>

                <option value='order'>ترتیب نمایش</option>
              </select>
            </div>

            {/* Refresh */}

            <button
              onClick={onRefresh}

              className='
                btn
                btn-outline
                h-12
                rounded-xl
                gap-2
              '>
              <Refresh2 size={18} />
              بروزرسانی
            </button>

            {/* Create */}

            <button
              onClick={onCreate}

              className='
                btn
                btn-primary
                h-12
                rounded-xl
                gap-2
              '>
              <Add size={18} />
              افزودن نمونه‌کار
            </button>
          </div>
        </div>

        {/* Helper */}

        <div
          className='
            text-base-content/60
            flex
            items-center
            gap-2
            text-sm
          '>
          <Filter size={16} />

          <span>
            برای مدیریت سریع‌تر پروژه‌ها از جستجو، فیلتر و مرتب‌سازی استفاده
            کنید.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioToolbar;
