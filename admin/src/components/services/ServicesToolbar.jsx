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
  const handleSearchChange = (event) => {
    setSearch?.(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter?.(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort?.(event.target.value);
  };

  const handleRefresh = () => {
    onRefresh?.();
  };

  const handleCreate = () => {
    onCreate?.();
  };

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
      className='card border-base-300 bg-base-100 mb-6 border shadow-sm'>
      <div className='card-body gap-5'>
        {/* ===================================================
            MAIN CONTROLS
        =================================================== */}

        <div
          className='
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-center
            lg:justify-between
          '>
          {/* SEARCH */}

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
            <SearchNormal1
              size={20}
              className='text-base-content/50 shrink-0'
            />

            <input
              type='search'
              value={search}
              onChange={handleSearchChange}
              placeholder='جستجوی سرویس...'
              className='
                w-full
                bg-transparent
                text-sm
                outline-none
                placeholder:text-base-content/40
              '
            />
          </div>

          {/* ACTIONS */}

          <div
            className='
              flex
              w-full
              flex-wrap
              gap-3
              lg:w-auto
            '>
            {/* STATUS FILTER */}

            <div className='relative'>
              <Filter
                size={17}
                className='
                  text-base-content/50
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  z-10
                  -translate-y-1/2
                '
              />

              <select
                value={filter}
                onChange={handleFilterChange}
                className='
                  select
                  select-bordered
                  h-12
                  min-w-40
                  rounded-xl
                  pr-9
                  text-sm
                '>
                <option value='all'>همه وضعیت‌ها</option>

                <option value='active'>فقط فعال</option>

                <option value='inactive'>فقط غیرفعال</option>
              </select>
            </div>

            {/* SORT */}

            <div className='relative'>
              <Sort
                size={17}
                className='
                  text-base-content/50
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  z-10
                  -translate-y-1/2
                '
              />

              <select
                value={sort}
                onChange={handleSortChange}
                className='
                  select
                  select-bordered
                  h-12
                  min-w-40
                  rounded-xl
                  pr-9
                  text-sm
                '>
                <option value='newest'>جدیدترین</option>

                <option value='oldest'>قدیمی‌ترین</option>

                <option value='title'>بر اساس عنوان</option>

                <option value='order'>بر اساس ترتیب نمایش</option>
              </select>
            </div>

            {/* REFRESH */}

            <button
              type='button'
              onClick={handleRefresh}
              className='
                btn
                btn-outline
                h-12
                rounded-xl
              '>
              <Refresh2 size={18} />
              بروزرسانی
            </button>

            {/* CREATE */}

            <button
              type='button'
              onClick={handleCreate}
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

        {/* ===================================================
            HELPER
        =================================================== */}

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
