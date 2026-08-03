/** @format */

import { motion } from "framer-motion";
import {
  Gallery,
  Star1,
  TickCircle,
  Link as LinkIcon,
  Github,
} from "iconsax-reactjs";

const PortfolioPreview = ({ portfolio = {}, images = [] }) => {
  const previewImages =
    images.length > 0 ?
      images
    : portfolio.images?.map((item) => item.url) || [];

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
          space-y-5
        '>
        {/* Header */}

        <div
          className='
            flex
            items-start
            justify-between
            gap-3
          '>
          <div>
            <h3
              className='
                text-lg
                font-black
              '>
              پیش‌نمایش نمونه‌کار
            </h3>

            <p
              className='
                text-base-content/60
                mt-1
                text-sm
              '>
              نمایش نتیجه قبل از ذخیره
            </p>
          </div>

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

        {/* Images */}

        <div>
          {previewImages.length > 0 ?
            <div
              className='
                grid
                grid-cols-2
                gap-3
              '>
              {previewImages.map((image, index) => (
                <img
                  key={index}

                  src={
                    typeof image === "string" ? image : (
                      URL.createObjectURL(image)
                    )
                  }

                  alt='preview'

                  className='
                        aspect-video
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

                h-44

                items-center

                justify-center

                rounded-2xl

                gap-2
              '>
              <Gallery size={30} />
              تصویری انتخاب نشده
            </div>
          }
        </div>

        {/* Content */}

        <div
          className='
            space-y-4
          '>
          <div>
            <span
              className='
                text-base-content/50
                text-xs
              '>
              عنوان پروژه
            </span>

            <h4
              className='
                mt-1
                font-bold
              '>
              {portfolio.title || "عنوان پروژه"}
            </h4>
          </div>

          <div>
            <span
              className='
                text-base-content/50
                text-xs
              '>
              توضیحات
            </span>

            <p
              className='
                mt-1
                text-sm
                leading-6
              '>
              {portfolio.description || "توضیحات پروژه..."}
            </p>
          </div>
        </div>

        {/* Status */}

        <div
          className='
            flex
            flex-wrap
            gap-2
          '>
          <span
            className='
              badge
              badge-success
              gap-1
            '>
            <TickCircle size={14} />

            {portfolio.status === "PUBLISHED" ? "منتشر شده" : "پیش‌نویس"}
          </span>
        </div>

        {/* Links */}

        <div
          className='
            flex
            flex-col
            gap-2
          '>
          {portfolio.websiteUrl && (
            <a
              href={portfolio.websiteUrl}

              target='_blank'

              rel='noreferrer'

              className='
                  btn
                  btn-outline
                  btn-sm
                  gap-2
                '>
              <LinkIcon size={16} />
              مشاهده سایت
            </a>
          )}

          {portfolio.githubUrl && (
            <a
              href={portfolio.githubUrl}

              target='_blank'

              rel='noreferrer'

              className='
                  btn
                  btn-outline
                  btn-sm
                  gap-2
                '>
              <Github size={16} />
              گیت‌هاب
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPreview;
