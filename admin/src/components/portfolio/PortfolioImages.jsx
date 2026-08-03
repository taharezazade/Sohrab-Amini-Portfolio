/** @format */

import { motion } from "framer-motion";
import { Gallery } from "iconsax-reactjs";

const PortfolioImages = ({ images = [], className = "" }) => {
  const getImageUrl = (image) => {
    if (!image) return null;

    if (typeof image === "string") {
      return image;
    }

    if (image.url) {
      return image.url;
    }

    if (image instanceof File) {
      return URL.createObjectURL(image);
    }

    return null;
  };

  const validImages = images.map(getImageUrl).filter(Boolean);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      className={className}>
      {validImages.length > 0 ?
        <div
          className='
            grid

            grid-cols-2

            gap-3

            md:grid-cols-3
          '>
          {validImages.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}

              whileHover={{
                scale: 1.03,
              }}

              className='
                    overflow-hidden

                    rounded-2xl

                    bg-base-200
                  '>
              <img
                src={image}

                alt={`portfolio-image-${index}`}

                className='
                      aspect-video

                      h-full

                      w-full

                      object-cover
                    '
              />
            </motion.div>
          ))}
        </div>
      : <div
          className='
            bg-base-200

            text-base-content/50

            flex

            h-44

            flex-col

            items-center

            justify-center

            gap-3

            rounded-2xl
          '>
          <Gallery size={36} />

          <span
            className='
              text-sm
            '>
            تصویری برای این پروژه ثبت نشده است
          </span>
        </div>
      }
    </motion.div>
  );
};

export default PortfolioImages;
