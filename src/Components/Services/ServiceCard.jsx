/** @format */
import { TickCircle } from "iconsax-reactjs";

function ServiceCard({ service, onOpenDrawer }) {
  const Icon = service.icon;
  return (
    <article className='group h-full'>
      <div
        className='
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-base-300/60
          bg-base-100/55
          backdrop-blur-sm
          transition-all
          duration-500
          group-hover:border-primary/30
          p-5
          sm:p-6
          lg:p-7
        '>
        {/* ===================== Content ===================== */}

        <div className='flex flex-1 flex-col'>
          {/* Header */}

          <div className='flex items-start justify-between gap-4'>
            <div
              className='
                flex
                h-14
                w-14
                sm:h-16
                sm:w-16
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                transition-all
                duration-500

                group-hover:bg-primary
                group-hover:scale-110
                group-hover:rotate-6
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
          </div>

          {/* Title */}

          <div className='mt-8'>
            <h3
              className='
                text-xl
                sm:text-2xl
                font-black
                leading-relaxed
              '>
              {service.title}
            </h3>

            <p
              className='
                mt-4
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                text-base-content/70
              '>
              {service.description}
            </p>
          </div>

          {/* Features */}

          <div className='mt-8 space-y-3'>
            {service.features.map((feature) => (
              <div
                key={feature}
                className='
                  flex
                  items-start
                  gap-3
                '>
                <TickCircle
                  size={20}
                  variant='Bold'
                  className='mt-1 shrink-0 text-success'
                />

                <span
                  className='
                    text-sm
                    sm:text-base
                    leading-6
                    text-base-content/75
                  '>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}

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
              {service.technologies.map((tech) => (
                <span
                  key={tech}
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

        {/* ===================== Footer ===================== */}

        <div
          className='
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
                rounded-full
                bg-success
                animate-pulse
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
              sm:grid-cols-2
              gap-3
            '>
            <button
              className='
                btn
                btn-primary
                rounded-full
              '>
              درخواست پروژه
            </button>

            <button
              onClick={() => onOpenDrawer(service)}
              className='
                btn
                btn-outline
                rounded-full
              '>
              جزئیات بیشتر
            </button>
          </div>
        </div>

        {/* ===================== Hover Glow ===================== */}

        <div
          className='
            pointer-events-none
            absolute
            inset-0
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
              -left-24
              bottom-0
              h-48
              w-48
              rounded-full
              bg-secondary/10
              blur-[100px]
            '
          />
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
