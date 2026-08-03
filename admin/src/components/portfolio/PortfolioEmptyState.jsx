/** @format */

import { motion } from "framer-motion";
import { Add, Gallery, SearchNormal1 } from "iconsax-reactjs";

const PortfolioEmptyState = ({
  title,
  description,

  onCreate,

  actionText = "افزودن نمونه‌کار",

  searchMode = false,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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

          flex

          min-h-80

          items-center

          justify-center

          text-center
        '>
        {/* Icon */}

        <div
          className={`
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl

            ${
              searchMode ? "bg-info/10 text-info" : "bg-primary/10 text-primary"
            }
          `}>
          {searchMode ?
            <SearchNormal1
              size={40}

              variant='Bulk'
            />
          : <Gallery
              size={40}

              variant='Bulk'
            />
          }
        </div>

        {/* Content */}

        <div
          className='
            mt-5
            max-w-md
          '>
          <h3
            className='
              text-xl
              font-black
            '>
            {title ||
              (searchMode ? "نتیجه‌ای پیدا نشد" : (
                "هنوز نمونه‌کاری ثبت نشده است"
              ))}
          </h3>

          <p
            className='
              text-base-content/60

              mt-3

              text-sm

              leading-6
            '>
            {description ||
              (searchMode ?
                "با تغییر فیلترها یا عبارت جستجو دوباره تلاش کنید."
              : "اولین پروژه خود را ایجاد کنید تا در سایت نمایش داده شود.")}
          </p>
        </div>

        {/* Action */}

        {onCreate && !searchMode && (
          <button
            type='button'

            onClick={onCreate}

            className='
                btn
                btn-primary

                mt-6

                gap-2

                rounded-xl
              '>
            <Add size={18} />

            {actionText}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioEmptyState;
