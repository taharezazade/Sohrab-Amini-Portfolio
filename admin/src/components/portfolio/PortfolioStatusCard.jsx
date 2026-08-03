/** @format */

import { motion } from "framer-motion";
import {
  TickCircle,
  Clock,
  Archive,
  Star1,
  Sort,
  Category,
} from "iconsax-reactjs";

const PortfolioStatusCard = ({ portfolio = {} }) => {
  if (!portfolio) return null;

  const statusConfig = {
    PUBLISHED: {
      title: "منتشر شده",
      icon: TickCircle,
      className: "badge-success",
    },

    DRAFT: {
      title: "پیش‌نویس",
      icon: Clock,
      className: "badge-warning",
    },

    ARCHIVED: {
      title: "آرشیو شده",
      icon: Archive,
      className: "badge-ghost",
    },
  };

  const currentStatus = statusConfig[portfolio.status] || statusConfig.DRAFT;

  const StatusIcon = currentStatus.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
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
          p-5
        '>
        <div
          className='
            flex
            items-center
            justify-between
          '>
          <h3
            className='
              font-black
            '>
            وضعیت پروژه
          </h3>

          {portfolio.featured && (
            <span
              className='
                  badge
                  badge-warning
                  gap-1
                '>
              <Star1 size={14} />
              ویژه
            </span>
          )}
        </div>

        {/* Status */}

        <div
          className='
            flex
            items-center
            gap-3
          '>
          <div
            className='
              bg-primary/10
              text-primary

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-xl
            '>
            <StatusIcon size={25} variant='Bulk' />
          </div>

          <div>
            <p
              className='
                text-base-content/50
                text-xs
              '>
              وضعیت انتشار
            </p>

            <span
              className={`
                badge
                mt-1
                gap-1

                ${currentStatus.className}
              `}>
              <StatusIcon size={14} />

              {currentStatus.title}
            </span>
          </div>
        </div>

        {/* Details */}

        <div
          className='
            divide-base-200
            divide-y
          '>
          <div
            className='
              flex
              items-center
              justify-between
              py-3
            '>
            <span
              className='
                text-base-content/60
                flex
                items-center
                gap-2
                text-sm
              '>
              <Sort size={16} />
              ترتیب نمایش
            </span>

            <span
              className='
                font-bold
              '>
              {portfolio.order || "-"}
            </span>
          </div>

          <div
            className='
              flex
              items-center
              justify-between
              py-3
            '>
            <span
              className='
                text-base-content/60
                flex
                items-center
                gap-2
                text-sm
              '>
              <Category size={16} />
              دسته‌بندی
            </span>

            <span
              className='
                font-bold
              '>
              {portfolio.category || "-"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioStatusCard;
