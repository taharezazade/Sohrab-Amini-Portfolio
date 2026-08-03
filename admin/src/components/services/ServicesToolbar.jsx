/** @format */

import { motion } from "framer-motion";
import { Add, Refresh2, SearchNormal1, Filter, Sort } from "iconsax-reactjs";

const ServicesToolbar = ({
  search = "",
  setSearch,
  filter = "all",
  setFilter,
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
        mb-6
        border
        shadow-sm
      '>
      <div className='card-body gap-5'>
        {/* Top Actions */}

        <div
          className='
            flex
            flex-col
            gap-4

            lg:flex-row
            lg:items-center
            lg:justify-between
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

              lg:max-w-md
            '>
            <SearchNormal1 size={20} className='text-base-content/50' />

            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='جستجوی سرویس...'
              className='
                w-full
                bg-transparent
                outline-none
              '
            />
          </div>

          {/* Actions */}

          <div
            className='
              flex
              flex-wrap
              gap-3
            '>
            {/* Status Filter */}

            <div className='relative'>
              <Filter
                size={16}
                className='
                  text-base-content/50
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                '
              />

              <select
                value={filter}

                onChange={(e) => setFilter(e.target.value)}

                className='
                  select
                  select-bordered
                  h-12
                  rounded-xl
                  pr-9
                '>
                <option value='all'>همه وضعیت‌ها</option>

                <option value='active' className="text-success">فعال</option>

                <option value='inactive' className="text-error">غیرفعال</option>
              </select>
            </div>

            {/* Sort */}

            <div className='relative'>
              <Sort
                size={16}
                className='
                  text-base-content/50
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                '
              />

              <select
                value={sort}

                onChange={(e) => setSort?.(e.target.value)}

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
              '>
              <Add size={18} />
              افزودن سرویس
            </button>
          </div>
        </div>

        {/* Helper Text */}

        <div
          className='
            text-base-content/60
            flex
            items-center
            gap-2
            text-sm
          '>
          <Filter size={16} />

          <span>جستجو، فیلتر و مرتب‌سازی سرویس‌ها</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesToolbar;
