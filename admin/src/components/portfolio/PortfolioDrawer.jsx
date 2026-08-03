/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { CloseCircle, Gallery, Link, Star1, TickCircle } from "iconsax-reactjs";
import { LuGithub } from "react-icons/lu";
const PortfolioDrawer = ({ open = false, portfolio = null, onClose }) => {
  if (!portfolio) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={onClose}

            className='
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
              '
          />

          {/* Drawer */}

          <motion.aside
            initial={{
              x: "100%",
            }}

            animate={{
              x: 0,
            }}

            exit={{
              x: "100%",
            }}

            transition={{
              duration: 0.3,
            }}

            className='
                fixed
                right-0
                top-0
                z-50

                h-screen
                w-full

                overflow-y-auto

                bg-base-100

                shadow-xl


                sm:max-w-xl
              '>
            {/* Header */}

            <div
              className='
                  border-base-300
                  flex
                  items-center
                  justify-between
                  border-b
                  p-5
                '>
              <h2
                className='
                    text-lg
                    font-black
                  '>
                جزئیات نمونه‌کار
              </h2>

              <button
                onClick={onClose}

                className='
                    btn
                    btn-ghost
                    btn-sm
                    btn-square
                  '>
                <CloseCircle size={22} />
              </button>
            </div>

            {/* Content */}

            <div
              className='
                  space-y-6
                  p-5
                '>
              {/* Images */}

              <div>
                <h3
                  className='
                      mb-3
                      flex
                      items-center
                      gap-2
                      font-bold
                    '>
                  <Gallery size={18} />
                  تصاویر پروژه
                </h3>

                {portfolio.images?.length > 0 ?
                  <div
                    className='
                        grid
                        grid-cols-2
                        gap-3
                      '>
                    {portfolio.images.map((image, index) => (
                      <img
                        key={image.id || index}

                        src={image.url}

                        alt={portfolio.title}

                        className='
                                aspect-video
                                w-full
                                rounded-xl
                                object-cover
                              '
                      />
                    ))}
                  </div>
                : <div
                    className='
                        bg-base-200
                        text-base-content/50
                        flex
                        h-40
                        items-center
                        justify-center
                        rounded-xl
                      '>
                    تصویری وجود ندارد
                  </div>
                }
              </div>

              {/* Title */}

              <div>
                <h3
                  className='
                      text-base-content/60
                      text-sm
                    '>
                  عنوان
                </h3>

                <p
                  className='
                      mt-1
                      font-bold
                    '>
                  {portfolio.title}
                </p>
              </div>

              {/* Description */}

              <div>
                <h3
                  className='
                      text-base-content/60
                      text-sm
                    '>
                  توضیحات
                </h3>

                <p
                  className='
                      mt-2
                      leading-7
                    '>
                  {portfolio.description || "-"}
                </p>
              </div>

              {/* Status */}

              <div
                className='
                    flex
                    flex-wrap
                    gap-3
                  '>
                <span
                  className={`
                      badge
                      gap-1

                      ${
                        portfolio.status === "PUBLISHED" ?
                          "badge-success"
                        : "badge-warning"
                      }
                    `}>
                  <TickCircle size={14} />

                  {portfolio.status === "PUBLISHED" ? "منتشر شده" : "غیر منتشر"}
                </span>

                {portfolio.featured && (
                  <span
                    className='
                          badge
                          badge-warning
                          gap-1
                        '>
                    <Star1 size={14} />
                    پروژه ویژه
                  </span>
                )}
              </div>

              {/* Links */}

              <div
                className='
                    space-y-3
                  '>
                {portfolio.link && (
                  <a
                    href={portfolio.link}

                    target='_blank'

                    rel='noreferrer'

                    className='
                          btn
                          btn-outline
                          w-full
                          gap-2
                        '>
                    <Link size={18} />
                    مشاهده سایت
                  </a>
                )}

                {portfolio.github && (
                  <a
                    href={portfolio.github}

                    target='_blank'

                    rel='noreferrer'

                    className='
                          btn
                          btn-outline
                          w-full
                          gap-2
                        '>
                    <LuGithub size={18} />
                    گیت‌هاب پروژه
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioDrawer;
