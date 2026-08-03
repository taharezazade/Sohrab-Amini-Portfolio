/** @format */

import { motion } from "framer-motion";
import { TickCircle, CloseCircle, Star1, Gallery } from "iconsax-reactjs";

import TableActions from "./TableActions";

const PortfolioTable = ({
  portfolios = [],

  onView,

  onEdit,

  onDelete,

  onToggleStatus,

  onToggleFeatured,
}) => {
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

        overflow-hidden

        border

        shadow-sm
      '>
      <div
        className='
          overflow-x-auto
        '>
        <table
          className='
            table
            w-full
          '>
          <thead>
            <tr>
              <th>پروژه</th>

              <th>دسته‌بندی</th>

              <th>وضعیت</th>

              <th>ویژه</th>

              <th>ترتیب</th>

              <th>تاریخ ایجاد</th>

              <th
                className='
                  text-center
                '>
                عملیات
              </th>
            </tr>
          </thead>

          <tbody>
            {portfolios.map((portfolio) => (
              <tr
                key={portfolio.id}

                className='
                    hover:bg-base-200

                    transition
                  '>
                {/* Project */}

                <td>
                  <div
                    className='
                        flex

                        items-center

                        gap-3
                      '>
                    <div
                      className='
                          bg-primary/10

                          flex

                          h-12

                          w-12

                          shrink-0

                          items-center

                          justify-center

                          overflow-hidden

                          rounded-xl
                        '>
                      {portfolio.images?.length > 0 ?
                        <img
                          src={portfolio.images[0]?.url || portfolio.images[0]}

                          alt={portfolio.title}

                          className='
                              h-full

                              w-full

                              object-cover
                            '
                        />
                      : <Gallery
                          size={24}

                          className='
                              text-primary
                            '
                        />
                      }
                    </div>

                    <div
                      className='
                          max-w-xs
                        '>
                      <p
                        className='
                            truncate

                            font-bold
                          '>
                        {portfolio.title}
                      </p>

                      <p
                        className='
                            text-base-content/50

                            truncate

                            text-xs
                          '>
                        {portfolio.description || "-"}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}

                <td>
                  <span
                    className='
                        badge

                        badge-ghost
                      '>
                    {portfolio.category || "-"}
                  </span>
                </td>

                {/* Status */}

                <td>
                  <button
                    onClick={() => onToggleStatus?.(portfolio)}

                    className={`
                        badge

                        cursor-pointer

                        gap-1

                        ${
                          portfolio.status === "PUBLISHED" ? "badge-success"
                          : portfolio.status === "ARCHIVED" ? "badge-neutral"
                          : "badge-warning"
                        }
                      `}>
                    {portfolio.status === "PUBLISHED" ?
                      <>
                        <TickCircle size={14} />
                        منتشر شده
                      </>
                    : <>
                        <CloseCircle size={14} />

                        {portfolio.status === "ARCHIVED" ? "آرشیو" : "پیش‌نویس"}
                      </>
                    }
                  </button>
                </td>

                {/* Featured */}

                <td>
                  <button
                    onClick={() => onToggleFeatured?.(portfolio)}

                    className={`
                        badge

                        cursor-pointer

                        gap-1

                        ${portfolio.featured ? "badge-warning" : "badge-ghost"}
                      `}>
                    <Star1 size={14} />

                    {portfolio.featured ? "ویژه" : "عادی"}
                  </button>
                </td>

                {/* Order */}

                <td>
                  <span
                    className='
                        badge

                        badge-ghost
                      '>
                    {portfolio.order ?? "-"}
                  </span>
                </td>

                {/* Date */}

                <td>
                  <span
                    className='
                        text-base-content/60

                        text-sm
                      '>
                    {portfolio.createdAt ?
                      new Date(portfolio.createdAt).toLocaleDateString("fa-IR")
                    : "-"}
                  </span>
                </td>

                {/* Actions */}

                <td>
                  <TableActions
                    item={portfolio}

                    onView={onView}

                    onEdit={onEdit}

                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PortfolioTable;
