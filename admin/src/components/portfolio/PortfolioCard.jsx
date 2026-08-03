/** @format */

import { motion } from "framer-motion";
import { Gallery, Star1, TickCircle, Eye } from "iconsax-reactjs";

const PortfolioCard = ({ portfolio, onView }) => {
  if (!portfolio) return null;

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
        overflow-hidden
        border
        shadow-sm
      '>
      {/* Image */}

      <div
        className='
          bg-base-200
          relative
          aspect-video
          overflow-hidden
        '>
        {portfolio.images?.length > 0 ?
          <img
            src={portfolio.images[0]?.url}

            alt={portfolio.title}

            className='
              h-full
              w-full
              object-cover
              transition
              duration-300
              hover:scale-105
            '
          />
        : <div
            className='
              text-base-content/40
              flex
              h-full
              items-center
              justify-center
            '>
            <Gallery size={42} />
          </div>
        }

        {/* Featured */}

        {portfolio.featured && (
          <span
            className='
                badge
                badge-warning
                absolute
                right-3
                top-3
                gap-1
              '>
            <Star1 size={14} variant='Bold' />
            ویژه
          </span>
        )}
      </div>

      {/* Content */}

      <div
        className='
          card-body
          gap-4
        '>
        <div>
          <h3
            className='
              line-clamp-1
              font-black
            '>
            {portfolio.title}
          </h3>

          <p
            className='
              text-base-content/60
              mt-2
              line-clamp-2
              text-sm
            '>
            {portfolio.description}
          </p>
        </div>

        {/* Status */}

        <div
          className='
            flex
            items-center
            justify-between
          '>
          <span
            className={`
              badge
              gap-1

              ${
                portfolio.status === "PUBLISHED" ?
                  "badge-success"
                : "badge-ghost"
              }
            `}>
            <TickCircle size={14} />

            {portfolio.status === "PUBLISHED" ? "منتشر شده" : "پیش‌نویس"}
          </span>

          <button
            onClick={() => onView?.(portfolio)}

            className='
              btn
              btn-ghost
              btn-sm
              gap-2
            '>
            <Eye size={16} />
            مشاهده
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
