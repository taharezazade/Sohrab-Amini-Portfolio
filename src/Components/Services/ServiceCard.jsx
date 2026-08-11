/** @format */

import { TickCircle } from "iconsax-reactjs";

import { getServiceIcon } from "./service.icons";

function ServiceCard({ service, onOpenDrawer }) {
  const Icon = getServiceIcon(service?.icon);

  const features = Array.isArray(service?.features) ? service.features : [];

  const technologies =
    Array.isArray(service?.technologies) ? service.technologies : [];

  return (
    <article
      className='
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-base-300
        bg-base-100
        p-6
        sm:p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-2xl
      '>
      {/* =====================================================
          Content
      ====================================================== */}

      <div className='relative z-10 flex flex-1 flex-col'>
        {/* Header */}

        <div className='flex items-start justify-between gap-4'>
          {/* Icon */}

          <div
            className='
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-6
              group-hover:bg-primary
            '>
            <Icon
              size={30}
              variant='Bulk'
              className='
                text-primary
                transition-all
                duration-500
                group-hover:text-primary-content
              '
            />
          </div>

          {/* Category */}

          {service?.category && (
            <span
              className='
                badge
                badge-outline
                rounded-full
                whitespace-nowrap
                px-3
                py-2
                text-xs
              '>
              {service.category}
            </span>
          )}
        </div>

        {/* Title */}

        <div className='mt-8'>
          <h3
            className='
              text-xl
              font-black
              leading-relaxed
              sm:text-2xl
            '>
            {service?.title}
          </h3>

          {service?.description && (
            <p
              className='
                mt-4
                text-sm
                leading-7
                text-base-content/70
                sm:text-base
                sm:leading-8
              '>
              {service.description}
            </p>
          )}
        </div>

        {/* Features */}

        {features.length > 0 && (
          <div className='mt-8 space-y-3'>
            {features.map((feature, index) => (
              <div
                key={`${service.id}-feature-${index}`}
                className='
                  flex
                  items-start
                  gap-3
                '>
                <TickCircle
                  size={20}
                  variant='Bold'
                  className='
                    mt-1
                    shrink-0
                    text-success
                  '
                />

                <span
                  className='
                    text-sm
                    leading-6
                    text-base-content/75
                    sm:text-base
                  '>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}

        {technologies.length > 0 && (
          <div className='mt-8'>
            <h4
              className='
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-base-content/50
              '>
              تکنولوژی‌های مورد استفاده
            </h4>

            <div className='flex flex-wrap gap-2 sm:gap-3'>
              {technologies.map((tech, index) => (
                <span
                  key={`${service.id}-tech-${index}`}
                  className='
                    rounded-full
                    border
                    border-primary/15
                    bg-primary/5
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-primary
                    transition-all
                    duration-300

                    group-hover:border-primary/30
                    group-hover:bg-primary/10
                  '>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}

        <div
          className='
            mt-8
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-base-300
            to-transparent
          '
        />
      </div>

      {/* =====================================================
          Footer
      ====================================================== */}

      <div
        className='
          relative
          z-10
          mt-8
          flex
          flex-col
          gap-5
        '>
        {/* Status */}

        <div className='flex items-center gap-3'>
          <span
            className='
              h-3
              w-3
              shrink-0
              animate-pulse
              rounded-full
              bg-success
            '
          />

          <div>
            <p className='font-bold'>آماده دریافت پروژه</p>

            <p className='text-sm text-base-content/60'>
              پاسخگویی سریع و شروع همکاری
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div
          className='
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
          '>
          <button
            type='button'
            className='
              btn
              btn-primary
              rounded-full
            '>
            درخواست پروژه
          </button>

          <button
            type='button'
            onClick={() => onOpenDrawer?.(service)}
            className='
              btn
              btn-outline
              rounded-full
            '>
            جزئیات بیشتر
          </button>
        </div>
      </div>

      {/* =====================================================
          Hover Glow
      ====================================================== */}

      <div
        className='
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        '>
        <div
          className='
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-primary/10
            blur-[100px]
          '
        />

        <div
          className='
            absolute
            -bottom-10
            -left-24
            h-48
            w-48
            rounded-full
            bg-secondary/10
            blur-[100px]
          '
        />
      </div>
    </article>
  );
}

export default ServiceCard;
